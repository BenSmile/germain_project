package cd.ben.collectbackend.controller;


import cd.ben.collectbackend.Service.UserService;
import cd.ben.collectbackend.controller.payload.LoginPayload;
import cd.ben.collectbackend.controller.payload.UserCreationRequest;
import cd.ben.collectbackend.model.Question;
import cd.ben.collectbackend.model.Questionnaire;
import cd.ben.collectbackend.model.RoleName;
import cd.ben.collectbackend.model.User;
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
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/")
    public Iterable<User> getAllUsers() {
        return userService.allUsers();
    }

    @PostMapping("/login2")
    public ResponseEntity<?> login(@Valid @RequestBody com.fasterxml.jackson.databind.JsonNode payload, BindingResult result) {
        Map<String, String> errorMap = new HashMap<>();
        System.out.println("payload = " + payload);


        if (!payload.has("username")) {
            result.addError(new FieldError("User", "username", "Username required"));
        }


        if (!payload.has("password")) {
            result.addError(new FieldError("User", "password", "Password required"));
        }

        User user = userService.findByUsername(payload.get("username").asText());

        if (user == null) {
            result.addError(new FieldError("User", "username", "Please, check your username"));
        }

        if (!user.getPassword().equals(payload.get("password").asText())) {
            result.addError(new FieldError("User", "password", "Please, check your password"));
        }

        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(user, HttpStatus.OK);
    }


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@Valid @RequestBody LoginPayload credentials, BindingResult result) {
        Map<String, String> errorMap = new HashMap<>();
        System.out.println("payload = " + credentials.getUsername());

        User user = userService.findByUsername(credentials.getUsername());

        if (user == null) {
            result.addError(new FieldError("User", "username", "Please, check your username"));

            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        if (!user.getPassword().equals(credentials.getPassword())) {
            result.addError(new FieldError("User", "password", "Please, check your password"));
        }

        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(user, HttpStatus.OK);
    }

    @PostMapping("/add_user")
    public ResponseEntity<?> addOrUpdateQuestion(@Valid @RequestBody UserCreationRequest user, BindingResult result) {
        Map<String, String> errorMap = new HashMap<>();
        System.out.println("payload = " + user);
        RoleName roleName = null;
        try {
            roleName = RoleName.valueOf(user.getRole().toUpperCase());
        } catch (Exception e) {
            result.addError(new FieldError("User", "Role", "Please, check your role"));
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        User u = new User();
        u.setEmail(user.getEmail());
        u.setUsername(user.getUsername());
        u.setFirstName(user.getFirstName());
        u.setLastName(user.getLastName());
        u.setPassword(user.getPassword());

        u.setRole(roleName);
        User e = userService.addUser(u);
        return new ResponseEntity(e, HttpStatus.OK);
    }

    @GetMapping("/{id}/enquetes")
    public ResponseEntity getAllQuestionnaire(@PathVariable Long id) {
        System.out.println("id = " + id);
        User user = userService.findById(id);
        if (user == null) {
            return new ResponseEntity<String>("User not found", HttpStatus.BAD_REQUEST);
//            result.addError(new FieldError("User", "user", "User not found"));
        }
        Iterable<Questionnaire> allQuestionnaires = userService.getAllQuestionnaires(id);
        return new ResponseEntity(allQuestionnaires, HttpStatus.OK);
    }


}
