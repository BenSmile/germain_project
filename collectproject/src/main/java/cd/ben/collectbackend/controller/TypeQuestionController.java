package cd.ben.collectbackend.controller;

import cd.ben.collectbackend.model.TypeQuestion;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.HashMap;


@RestController
@RequestMapping("/api/type_question")
@CrossOrigin
public class TypeQuestionController {



    @GetMapping("/")
    public static ResponseEntity<?> getNames(Class<? extends Enum<?>> e) {

        String[] types = Arrays.stream(TypeQuestion.values()).map(Enum::name).toArray(String[]::new);
        HashMap<String, String[]> stringHashMap = new HashMap<>();
        stringHashMap.put("types", types);
        return ResponseEntity.ok(stringHashMap);
    }
}
