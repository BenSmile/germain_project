package cd.ben.collectbackend.Service;


import cd.ben.collectbackend.Repository.QuestionRepository;
import cd.ben.collectbackend.Repository.QuestionRepository;
import cd.ben.collectbackend.Repository.ReponseRepository;
import cd.ben.collectbackend.model.Question;
import cd.ben.collectbackend.model.Questionnaire;
import cd.ben.collectbackend.model.Reponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private ReponseRepository reponseRepository;

    public Question saveOrUpdate(Question question) {
        return questionRepository.save(question);
    }

    public Question findById(Long id) {
        return questionRepository.findQuestionById(id);
    }

    public Iterable<Question> findAll() {
        return questionRepository.findAll();
    }

    public void deleteById(Long id) {
        if (findById(id) != null) {
            questionRepository.delete(findById(id));
        }
    }

    public Iterable<Reponse> findAllReponseByQuestion(Question question) {
        return reponseRepository.findReponsesByQuestion(question);
    }



}
