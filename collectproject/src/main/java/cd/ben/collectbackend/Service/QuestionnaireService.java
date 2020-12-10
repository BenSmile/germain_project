package cd.ben.collectbackend.Service;


import cd.ben.collectbackend.Repository.QuestionnaireRepository;
import cd.ben.collectbackend.model.Questionnaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionnaireService {

    @Autowired
    private QuestionnaireRepository questionnaireRepository;

    public Questionnaire saveOrUpdate(Questionnaire questionnaire) {

        System.out.println("questionnaire = " + questionnaire.getId());

        questionnaire.setCode(questionnaire.getCode().toUpperCase());
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


}
