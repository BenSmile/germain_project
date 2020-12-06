package cd.ben.collectbackend.Repository;

import cd.ben.collectbackend.model.Questionnaire;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionnaireRepository extends CrudRepository<Questionnaire, Long> {

}
