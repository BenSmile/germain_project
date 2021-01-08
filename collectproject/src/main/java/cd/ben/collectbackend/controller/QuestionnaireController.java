package cd.ben.collectbackend.controller;


import cd.ben.collectbackend.Repository.QuestionnaireRepository;
import cd.ben.collectbackend.Service.QuestionService;
import cd.ben.collectbackend.Service.QuestionnaireService;
import cd.ben.collectbackend.Service.UserService;
import cd.ben.collectbackend.controller.payload.AssignUserQuestionnaire;
import cd.ben.collectbackend.model.Question;
import cd.ben.collectbackend.model.Questionnaire;
import cd.ben.collectbackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/questionnaire")
@CrossOrigin
public class QuestionnaireController {

    @Autowired
    private QuestionnaireService questionnaireService;

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
        questionnaireService.assignUserToQuestionnaire(payload.getQuestionnaireId(), payload.getUserId());
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

        System.out.println("allEnqueteurs = " + ((Collection<?> )allEnqueteurs).size());
        return new ResponseEntity(allEnqueteurs, HttpStatus.OK);
    }
}
