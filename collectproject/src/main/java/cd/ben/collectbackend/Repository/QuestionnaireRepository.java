package cd.ben.collectbackend.Repository;

import cd.ben.collectbackend.model.Questionnaire;
import cd.ben.collectbackend.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionnaireRepository extends CrudRepository<Questionnaire, Long> {

    @Override
    Iterable<Questionnaire> findAllById(Iterable<Long> iterable);

    Questionnaire findQuestionnaireById(Long id);

    Questionnaire findQuestionnaireByCode(String code);

    @Query(value = "select *  from users where id in (select user_id from enquete_users where enquete_id = ?1)", nativeQuery = true)
    Iterable<User> findAllUsersByQuestionnaire(Long id);
}
