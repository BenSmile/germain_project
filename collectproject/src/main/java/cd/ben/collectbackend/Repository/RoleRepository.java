package cd.ben.collectbackend.Repository;

import cd.ben.collectbackend.model.Role;
import cd.ben.collectbackend.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
    Role findRoleById(Long id);
}
