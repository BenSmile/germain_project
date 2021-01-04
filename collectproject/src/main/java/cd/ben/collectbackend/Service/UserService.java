package cd.ben.collectbackend.Service;


import cd.ben.collectbackend.Repository.UserRepository;
import cd.ben.collectbackend.model.Questionnaire;
import cd.ben.collectbackend.model.Role;
import cd.ben.collectbackend.model.RoleName;
import cd.ben.collectbackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public Iterable<User> allUsers() {
        return userRepository.findAll();
    }

    public User saveOrUpdate(User user) {
//        if(findById(questionnaire.getId()))
        return userRepository.save(user);
    }

    public User addEnqueteur(User user) {
//        Set<Role> roles = new HashSet<>();
//        Role role = new Role();
//        role.setName(RoleName.ENQUETEUR);
//        roles.add(role);
//        user.setRoles(roles);

//        List<RoleName> roles = new ArrayList<>();
//        Role role = new Role();
//        roles.add(RoleName.ENQUETEUR);
//        user.setRoles(roles);
        user.setRole(RoleName.ENQUETEUR);
        return userRepository.save(user);
    }

    public User addAdmin(User user) {
//        List<RoleName> roles = new ArrayList<>();
//        Role role = new Role();
//        roles.add(RoleName.ADMIN);
//        user.setRoles(roles);
        user.setRole(RoleName.ADMIN);

        return userRepository.save(user);
    }

    public User findByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    public String findPassWordByUsername(String password) {
        return userRepository.findPasswordByUsername(password);
    }


    public User addUser(User u) {

        return userRepository.save(u);
    }

    public User findById(Long userId) {
        return userRepository.findUserById(userId);
    }

    public Iterable<Questionnaire> getAllQuestionnaires(Long userId){
        Iterable<Questionnaire> allQuestionnaireByUser = userRepository.findAllQuestionnaireByUser(userId);
        return allQuestionnaireByUser;
    }
}
