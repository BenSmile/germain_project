package cd.ben.collectbackend.controller;


import cd.ben.collectbackend.Repository.QuestionnaireRepository;
import cd.ben.collectbackend.Service.QuestionService;
import cd.ben.collectbackend.Service.QuestionnaireService;
import cd.ben.collectbackend.Service.ReponseService;
import cd.ben.collectbackend.Service.UserService;
import cd.ben.collectbackend.controller.payload.AssignUserQuestionnaire;
import cd.ben.collectbackend.model.Question;
import cd.ben.collectbackend.model.Questionnaire;
import cd.ben.collectbackend.model.Reponse;
import cd.ben.collectbackend.model.User;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.node.ValueNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@RestController
@RequestMapping("/api/questionnaire")
@CrossOrigin
public class QuestionnaireController {

    @Autowired
    private QuestionnaireService questionnaireService;


    @Autowired
    private QuestionService questionService;


    @Autowired
    private ReponseService reponseService;

    @Autowired
    private UserService userService;


//    @Autowired
//    private QuestionService questionService;

    //    this method work for update and create task
    @PostMapping("/")
    public ResponseEntity<?> addQuestionnaire(@Valid @RequestBody Questionnaire questionnaire, BindingResult result) {
        System.out.println("questionnaire = " + questionnaire.getCode());

        Questionnaire questionnaireServiceByCode = questionnaireService.findByCode(questionnaire.getCode());

        if (questionnaireServiceByCode != null) {
            result.addError(new FieldError("Questionnaire", "code", "Code already used"));
        }

        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();

            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }
        Questionnaire newQuestionnaire = questionnaireService.saveOrUpdate(questionnaire);
        return new ResponseEntity(newQuestionnaire, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public Iterable<Questionnaire> getAllQuestionnaires() {
        return questionnaireService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity getQuestionnaireById(@PathVariable Long id) {
        if (questionnaireService.findById(id) == null) {
            return new ResponseEntity<String>("Questionnaire not found", HttpStatus.BAD_REQUEST);
        }
        Questionnaire byId = questionnaireService.findById(id);
        return new ResponseEntity(byId, HttpStatus.OK);
    }

    @GetMapping("/code/{code}")
    public ResponseEntity getQuestionnaireByCode(@PathVariable String code) {
        if (questionnaireService.findByCode(code) == null) {
            return new ResponseEntity<String>("Questionnaire not found", HttpStatus.BAD_REQUEST);
        }
        Questionnaire byId = questionnaireService.findByCode(code);
        return new ResponseEntity(byId, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletePT(@PathVariable Long id) {

        if (questionnaireService.findById(id) == null) {
            return new ResponseEntity<String>("Questionnaire not found", HttpStatus.BAD_REQUEST);
        }
        questionnaireService.deleteById(id);
        return new ResponseEntity<String>("Questionnaire deleted", HttpStatus.OK);
    }

    @GetMapping("/{id}/questions/")
    public ResponseEntity getQuestions(@PathVariable Long id) {
        if (questionnaireService.findById(id) == null) {
            return new ResponseEntity<String>("Questionnaire not found", HttpStatus.BAD_REQUEST);
        }
        Questionnaire byId = questionnaireService.findById(id);
        Iterable<Question> questions = questionnaireService.findAllQuestions(byId);

//        List<Question> questions = byId.getQuestions();
        return new ResponseEntity(questions, HttpStatus.OK);
    }

    @PostMapping("/assign_enqueteur")
    public ResponseEntity<?> addQuestionnaire(@Valid @RequestBody AssignUserQuestionnaire payload, BindingResult result) {
        Questionnaire questionnaire = questionnaireService.findById(payload.getQuestionnaireId());
        User user = userService.findById(payload.getUserId());
        if (user == null) {
            result.addError(new FieldError("User", "User", "User not found"));
        }
        if (questionnaire == null) {
            result.addError(new FieldError("Questionnaire", "Questionnaire", "Questionnaire not found"));
        }
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }
        try {
            questionnaireService.assignUserToQuestionnaire(payload.getQuestionnaireId(), payload.getUserId());
        } catch (Exception ex) {
            return new ResponseEntity(ex.toString(), HttpStatus.BAD_REQUEST);
        }


        return new ResponseEntity("User assigned ok", HttpStatus.OK);
    }

    @GetMapping("/{id}/enqueteurs")
    public ResponseEntity getAllEnqueteurs(@PathVariable Long id) {

        Questionnaire questionnaire = questionnaireService.findById(id);


        if (questionnaire == null) {
            return new ResponseEntity<String>("Questionnaire not found", HttpStatus.BAD_REQUEST);

//            result.addError(new FieldError("Questionnaire", "Questionnaire", "Questionnaire not found"));
        }
        Iterable<User> allEnqueteurs = questionnaireService.getAllEnqueteurs(id);

        System.out.println("allEnqueteurs = " + ((Collection<?>) allEnqueteurs).size());
        return new ResponseEntity(allEnqueteurs, HttpStatus.OK);
    }


    @PostMapping("/submit/")
    public ResponseEntity<?> receiveRep(@RequestBody Map<String, Object> payload) {

        String idQUESTION = "";
        System.out.println("payload = " + payload);

        Set<String> keys = payload.keySet();

        List<Reponse> newReponses = new ArrayList<>();

        for (String key : keys) {
            Reponse rep = new Reponse();
            String questionType = key.split(("/"))[0];

            idQUESTION = questionType.split(("_"))[1];

            String reponseValue = "";

            if (questionType.contains("checkbox")) {
                StringBuilder repStringBuilder = new StringBuilder("");

                List<String> keysss = payload.keySet().stream()
                        .filter(k -> k.contains(questionType)).collect(Collectors.toList());
                keysss.forEach(k -> repStringBuilder.append(payload.get(k).toString()).append("\n"));
                repStringBuilder.setLength(repStringBuilder.length() - 1);
                rep.setValeur(repStringBuilder.toString());
                payload.remove(keysss);
//                System.out.println("string builder = " + repStringBuilder.toString());
            } else {
                rep.setValeur(payload.get(key).toString());
            }

            newReponses.add(rep);

//            System.out.println("reponseValue = " + reponseValue);

//            payload.entrySet().stream()
//                    .filter(entry -> questionType.equals(entry.getKey().split("/"))).forEach(entry -> {
//                System.out.println("[x] " + questionType +" = "+ payload.get(entry.getKey()));
//            });

        }


//        int maxReponseGroupByQuestion = reponseService.findMaxReponseGroupByQuestion(Long.valueOf(idQUESTION));

        Question q = questionService.findById(Long.valueOf(idQUESTION));
        int maxResponseGroup = maxResponseGroup(q);
        for (Reponse rep : newReponses) {
            rep.setGroupReponse(maxResponseGroup + 1);
            rep.setQuestion(q);
            reponseService.saveOrUpdate(rep);
        }
        return new ResponseEntity("Reponses ajoutees avec succes", HttpStatus.OK);
    }

    private List<String> findKeys(Map<String, Object> treeMap, List<String> keys) {
        treeMap.forEach((key, value) -> {
            if (value instanceof LinkedHashMap) {
                Map<String, Object> map = (LinkedHashMap) value;
                findKeys(map, keys);
            }
            keys.add(key);
        });

        return keys;
    }


    public void processNode(JsonNode node) {
        Question question = null;
        Reponse rep = new Reponse();

        Long questionID = 0l;

        if (node.isArray()) {
            // if the node is a list of items,
            //  go through all the items and process them individually
            System.out.println("=== Array start ===");
            for (final JsonNode objInArray : node) {
                System.out.println("--- Array element start ---");
                // process the item in the array
                processNode(objInArray);
                System.out.println("--- Array element end ---");
            }
            System.out.println("=== Array end ===");
        } else if (node.isContainerNode()) {
            // if the node is an object,
            //  go through all fields within the object
            System.out.println("/// Object start ///");
            Iterator<Map.Entry<String, JsonNode>> it = node.fields();
            while (it.hasNext()) {
                Map.Entry<String, JsonNode> field = it.next();
                System.out.println("key: " + field.getKey());

                String key = field.getKey();
                String q = field.getKey().toString();
                String[] ss = key.split("_");
                String[] keyss = ss;
                int index = 0;
                String idQuestion = "";
                for (String s : ss) {

                    if (index == 1) {
                        idQuestion = s;
                    }
                    index++;
                }

                System.out.println("idQuestion = " + idQuestion);
                Long aLong = Long.valueOf(idQuestion);
//                System.out.println("idQuestion = " + aLong);

                question = questionService.findById(aLong);

                System.out.println("[]question = " + question.getTitre());

                rep.setQuestion(question);

                rep.setValeur("benjamin");

                reponseService.saveOrUpdate(rep);
//                System.out.println("key = " + keyss[0]);
//                System.out.println("questionnaire = " + q.split("_")[1]);

                //process every field in the array
                processNode(field.getValue());

            }
            System.out.println("/// Object end ///");
        } else {
            // if node is a simple value (like string or int) so let's print it
            System.out.println("value: " + node);
            rep.setValeur(node.toString());
        }

        System.out.println("questionID = " + questionID);
//        System.out.println("question = " + question);


        System.out.println("rep = " + rep.getQuestion().getTitre());
        reponseService.saveOrUpdate(rep);

    }

    public int maxResponseGroup(Question q) {
        List<Reponse> reponses = new ArrayList<>();
        questionService.findAllReponseByQuestion(q).forEach(reponses::add);
//        System.out.println("reponses = " + reponses.size());
        Collections.sort(reponses, Comparator.comparing(Reponse::getGroupReponse).reversed());
        if(!reponses.isEmpty()){
            int maxResponseGroup = reponses.get(0).getGroupReponse();
//            System.out.println("maxResponseGroup = " + maxResponseGroup);
            return maxResponseGroup;
        }else{
            return 0;
        }
    }
}
