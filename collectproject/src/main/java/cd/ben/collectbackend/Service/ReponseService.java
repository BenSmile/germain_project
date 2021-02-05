package cd.ben.collectbackend.Service;


import cd.ben.collectbackend.Repository.QuestionRepository;
import cd.ben.collectbackend.Repository.QuestionnaireRepository;
import cd.ben.collectbackend.Repository.ReponseRepository;
import cd.ben.collectbackend.model.Question;
import cd.ben.collectbackend.model.Questionnaire;
import cd.ben.collectbackend.model.Reponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReponseService {

    @Autowired
    private ReponseRepository reponseRepository;

    @Autowired
    private QuestionRepository questionRepository;

    public Reponse saveOrUpdate(Reponse reponse) {
        return reponseRepository.save(reponse);
    }

    public Reponse findById(Long id) {
        return reponseRepository.findReponseById(id);
    }


    public Iterable<Reponse> findAll() {
        return reponseRepository.findAll();
    }


    public void deleteById(Long id) {
        if (findById(id) != null) {
            reponseRepository.delete(findById(id));
        }
    }


    public int findMaxReponseGroupByQuestion(Long id) {
        if (findById(id) != null) {
          return reponseRepository.findMaxReponseGroupByQuestion(id);
        }
        else{
            return 0;
        }
    }

//    public Iterable<Question> findAllQuestions(Questionnaire questionnaire) {
//        return questionRepository.findQuestionsByQuestionnaire(questionnaire);
//    }


}
