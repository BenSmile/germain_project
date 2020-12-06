package cd.ben.collectbackend.Repository;


import cd.ben.collectbackend.model.Reponse;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReponseRepository extends CrudRepository<Reponse, Long> {
}
