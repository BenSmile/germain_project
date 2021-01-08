package cd.ben.collectbackend.Repository;

import cd.ben.collectbackend.model.Questionnaire;
import cd.ben.collectbackend.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findUserById(Long id);

    User findUserByUsername(String username);

    @Query(value = "select password from users where username = ?1", nativeQuery = true)
    String findPasswordByUsername(String username);


    @Query(value = "select *  from questionnaire where id in (select enquete_id  from enquete_users where user_id = ?1)", nativeQuery = true)
    Iterable<Questionnaire> findAllQuestionnaireByUser(Long id);
}
