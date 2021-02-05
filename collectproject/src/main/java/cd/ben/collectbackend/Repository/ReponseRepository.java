package cd.ben.collectbackend.Repository;


import cd.ben.collectbackend.model.Question;
import cd.ben.collectbackend.model.Questionnaire;
import cd.ben.collectbackend.model.Reponse;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReponseRepository extends CrudRepository<Reponse, Long> {

    Reponse findReponseById(Long id);

    @Query(value = "select max(group_reponse) from reponse where question_id = ?1)", nativeQuery = true)
    int findMaxReponseGroupByQuestion(Long id);

    Iterable<Reponse> findReponsesByQuestion(Question question);
}
