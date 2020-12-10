package cd.ben.collectbackend.controller;


import cd.ben.collectbackend.Service.QuestionService;
import cd.ben.collectbackend.Service.ReponseService;
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
@RequestMapping("/api/reponse")
@CrossOrigin
public class ReponseController {


    @Autowired
    private QuestionService questionService;

    @Autowired
    private ReponseService reponseService;

    @GetMapping("/")
    public Iterable<Reponse> getAllReponses() {
        return reponseService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity getReponseById(@PathVariable Long id) {
        if (reponseService.findById(id) == null) {
            return new ResponseEntity<String>("Reponse not found", HttpStatus.BAD_REQUEST);
        }
        Reponse byId = reponseService.findById(id);
        return new ResponseEntity(byId, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity deleteRep(@PathVariable Long id) {

        if (reponseService.findById(id) == null) {
            return new ResponseEntity<String>("Reponse not found", HttpStatus.BAD_REQUEST);
        }
        reponseService.deleteById(id);
        return new ResponseEntity<String>("Reponse deleted", HttpStatus.OK);
    }


    @PostMapping("/")
    public ResponseEntity<?> addOrUpdateReponse(@Valid @RequestBody com.fasterxml.jackson.databind.JsonNode payload, BindingResult result) {
        Map<String, String> errorMap = new HashMap<>();
        System.out.println("payload = " + payload);
        Reponse reponse = new Reponse();

        if (!payload.has("question")) {
            result.addError(new FieldError("Reponse", "Question", "Question is required"));
        }

        if (!payload.has("value")) {
            result.addError(new FieldError("Reponse", "type", "Value is required"));
        }

        if (!payload.has("enquete")) {
            result.addError(new FieldError("Reponse", "Title", "Title is required"));
        }

        if (payload.has("id")) {
            reponse.setId(payload.get("id").asLong());
        }

        if(questionService.findById(payload.get("question").asLong()) == null){
            result.addError(new FieldError("Reponse", "Question", "Question not found"));
        }

        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        reponse.setValeur(payload.get("value").asText());
        reponse.setEnquete(payload.get("enquete").asText());
        reponse.setQuestion(questionService.findById(payload.get("question").asLong()));
        Reponse newRep = reponseService.saveOrUpdate(reponse);
        return new ResponseEntity(newRep, HttpStatus.CREATED);
    }
}
