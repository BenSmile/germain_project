package cd.ben.collectbackend;

import cd.ben.collectbackend.Repository.RoleRepository;
import cd.ben.collectbackend.Repository.UserRepository;
import cd.ben.collectbackend.model.Role;
import cd.ben.collectbackend.model.RoleName;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class CollectprojectApplication {

    public static void main(String[] args) {
        SpringApplication.run(CollectprojectApplication.class, args);
    }


//    @Bean
//    CommandLineRunner init(RoleRepository roleRepository) {
//        return args -> {
//            int size = ((Collection<?>) roleRepository.findAll()).size();
//            System.out.println("size = " + size);
//            if (size == 0) {
//                Role roleAdmin = new Role();
//                roleAdmin.setName(RoleName.ADMIN);
//                roleRepository.save(roleAdmin);
//                Role roleEnqueteur = new Role();
//                roleEnqueteur.setName(RoleName.ENQUETEUR);
//                roleRepository.save(roleEnqueteur);
//            }
//
//            System.out.println("benjamin");
//        };
//    }

}
