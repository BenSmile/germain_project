package cd.ben.collectbackend.Repository;

import cd.ben.collectbackend.model.Questionnaire;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionnaireRepository extends CrudRepository<Questionnaire, Long> {

    @Override
    Iterable<Questionnaire> findAllById(Iterable<Long> iterable);

    Questionnaire findQuestionnaireById(Long id);

    Questionnaire findQuestionnaireByCode(String code);
}
