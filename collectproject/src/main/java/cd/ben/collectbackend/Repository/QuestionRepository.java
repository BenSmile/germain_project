package cd.ben.collectbackend.Repository;


import cd.ben.collectbackend.model.Question;
import cd.ben.collectbackend.model.Questionnaire;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Long> {

    Question findQuestionById(Long id);

    List<Question> findQuestionsByQuestionnaire(Questionnaire questionnaire);

}
