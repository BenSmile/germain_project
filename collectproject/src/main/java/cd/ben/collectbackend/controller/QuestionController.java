package cd.ben.collectbackend.controller;

import cd.ben.collectbackend.Repository.QuestionRepository;
import cd.ben.collectbackend.Service.QuestionService;
import cd.ben.collectbackend.Service.QuestionnaireService;
import cd.ben.collectbackend.model.Question;
import cd.ben.collectbackend.model.Questionnaire;
import cd.ben.collectbackend.model.Reponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/api/question")
@CrossOrigin
public class QuestionController {

    @Autowired
    private QuestionService questionService;


    @Autowired
    private QuestionnaireService questionnaireService;

    @GetMapping("/")
    public Iterable<Question> getAllQuestions() {
        return questionService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity getQuestionById(@PathVariable Long id) {
        if (questionService.findById(id) == null) {
            return new ResponseEntity<String>("Question not found", HttpStatus.BAD_REQUEST);
        }
        Question byId = questionService.findById(id);
        return new ResponseEntity(byId, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity deleteQuestion(@PathVariable Long id) {

        if (questionService.findById(id) == null) {
            return new ResponseEntity<String>("Question not found", HttpStatus.BAD_REQUEST);
        }
        questionService.deleteById(id);
        return new ResponseEntity<String>("Questionnaire deleted", HttpStatus.OK);
    }


    @PostMapping("/")
    public ResponseEntity<?> addOrUpdateQuestion(@Valid @RequestBody com.fasterxml.jackson.databind.JsonNode payload, BindingResult result) {
        Map<String, String> errorMap = new HashMap<>();
        System.out.println("payload = " + payload);
        Question question = new Question();


        if (!payload.has("questionnaire")) {
            result.addError(new FieldError("Question", "Questionnaire", "Questionnaire is required"));
        }

        if (!payload.has("type")) {
            result.addError(new FieldError("Question", "type", "Type is required"));
        }

        if (!payload.has("title")) {
            result.addError(new FieldError("Question", "Title", "Title is required"));
        }

        if (!payload.has("questionnaire")) {
            result.addError(new FieldError("Question", "Questionnaire", "Questionnaire is required"));
        }

        if (payload.has("suggestions")) {
            question.setSuggestions(payload.get("suggestions").asText());
        }

        if (payload.has("id")) {
            question.setId(payload.get("id").asLong());
        }

        if(questionnaireService.findById(payload.get("questionnaire").asLong()) == null){
            result.addError(new FieldError("Question", "Questionnaire", "Questionnaire not found"));
        }

        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        question.setTitre(payload.get("title").asText());
        question.setType(payload.get("type").asText());
        question.setQuestionnaire(questionnaireService.findById(payload.get("questionnaire").asLong()));
        Question newQuestionnaire = questionService.saveOrUpdate(question);
        return new ResponseEntity(null, HttpStatus.CREATED);
    }

    @GetMapping("/{id}/reponses/")
    public ResponseEntity getReponses(@PathVariable Long id) {
        if (questionService.findById(id) == null) {
            return new ResponseEntity<String>("Question not found", HttpStatus.BAD_REQUEST);
        }
        Question byId = questionService.findById(id);
        Iterable<Reponse> reponses= questionService.findAllReponseByQuestion(byId);
        return new ResponseEntity(reponses, HttpStatus.OK);
    }
}
