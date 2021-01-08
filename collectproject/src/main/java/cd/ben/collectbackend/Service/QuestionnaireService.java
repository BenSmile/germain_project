package cd.ben.collectbackend.Service;


import cd.ben.collectbackend.Repository.QuestionRepository;
import cd.ben.collectbackend.Repository.QuestionnaireRepository;
import cd.ben.collectbackend.Repository.UserRepository;
import cd.ben.collectbackend.model.Question;
import cd.ben.collectbackend.model.Questionnaire;
import cd.ben.collectbackend.model.Role;
import cd.ben.collectbackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class QuestionnaireService {

    @Autowired
    private QuestionnaireRepository questionnaireRepository;

    @Autowired
    private QuestionRepository questionRepository;


    @Autowired
    private UserRepository userRepository;

    public Questionnaire saveOrUpdate(Questionnaire questionnaire) {

        System.out.println("questionnaire = " + questionnaire.getId());

        if(questionnaire.getId()== null){
            questionnaire.setCode(questionnaire.getCode().toUpperCase());
        }

//        if(findById(questionnaire.getId()))
        return questionnaireRepository.save(questionnaire);
    }

    public Questionnaire findById(Long id) {

        return questionnaireRepository.findQuestionnaireById(id);
    }

    public Questionnaire findByCode(String code) {
        return questionnaireRepository.findQuestionnaireByCode(code);
    }

    public Iterable<Questionnaire> findAll() {
        return questionnaireRepository.findAll();
    }


    public void deleteById(Long id) {
        if (findById(id) != null) {
            questionnaireRepository.delete(findById(id));
        }
    }

    public Iterable<Question> findAllQuestions(Questionnaire questionnaire) {
        return questionRepository.findQuestionsByQuestionnaire(questionnaire);
    }


    public void assignUserToQuestionnaire(Long questionnaireId, Long userId) {
        Questionnaire questionnaire = findById(questionnaireId);
        Set<User> enqueteurs = questionnaire.getEnqueteurs();
        System.out.println("enqueteurs = " + enqueteurs.size());
        enqueteurs.add(userRepository.findUserById(userId));
        questionnaireRepository.save(questionnaire);
    }

    public Iterable<User> getAllEnqueteurs(Long questionnaireId){
        Iterable<User> allUsersByQuestionnaire = questionnaireRepository.findAllUsersByQuestionnaire(questionnaireId);
//        Questionnaire questionnaire = findById(questionnaireId);
//        return questionnaire.getEnqueteurs();
        return allUsersByQuestionnaire;
    }
}
