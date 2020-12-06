package cd.ben.collectbackend.controller;


import cd.ben.collectbackend.Repository.QuestionnaireRepository;
import cd.ben.collectbackend.model.Question;
import cd.ben.collectbackend.model.Questionnaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionnaireController {

    @Autowired
    private QuestionnaireRepository questionnaireRepository;


    public Questionnaire createOrUpdate(Questionnaire questionnaire){

        return  questionnaire;

    }

    public Questionnaire findById(Long id){
        return null;
    }


    public List<Questionnaire> findAll(){
        return null;
    }
}
