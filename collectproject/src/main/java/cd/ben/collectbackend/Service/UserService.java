package cd.ben.collectbackend.Service;


import cd.ben.collectbackend.Repository.QuestionnaireRepository;
import cd.ben.collectbackend.Repository.UserRepository;
import cd.ben.collectbackend.model.Questionnaire;
import cd.ben.collectbackend.model.Role;
import cd.ben.collectbackend.model.RoleName;
import cd.ben.collectbackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private QuestionnaireRepository questionnaireRepository;


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

    public Iterable<Questionnaire> getAllQuestionnaires(Long userId) {

        User u = findById(userId);
        List<Questionnaire> all = (List<Questionnaire>) questionnaireRepository.findAll();

        List<Questionnaire> collect = all
                .stream()
                .filter(questionnaire -> questionnaire.getEnqueteurs().contains(u)).collect(Collectors.toList());

        System.out.println("collect = " + collect.size());
//        Iterable<Questionnaire> allQuestionnaireByUser = userRepository.findAllQuestionnaireByUser(userId);
        return collect;
    }

    public List<User> allInvestigators() {

        List<User> all = (List<User>) allUsers();

        List<User> investigators = all
                .stream()
                .filter(user -> user.getRole().equals(RoleName.ENQUETEUR))
                .collect(Collectors.toList());
        return investigators;
    }
}
