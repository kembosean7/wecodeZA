package com.wecodeZA.backend.User;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@Configuration
public class UserConfiguration {

    @Bean
    CommandLineRunner commandLineRunner(
            UserRepository repository) {
        return args -> {
            User sean = new User(
                    "Sean",
                    "Kembo",
                    "kembosean7",
                    "sekembojhb024@student.wethinkcode",
                    new BCryptPasswordEncoder().encode("kembosea72024")

            );

            User jean = new User(
                    "Jean-Claude",
                    "Kumm",
                    "jeankum22",
                    "jclaudhjbh024@student.wethinkcode",
                    new BCryptPasswordEncoder().encode("jeankumm2224")

            );

            repository.saveAll(List.of(sean,jean));
            System.out.println("Saved users: " + List.of(sean, jean));



        };
    }


}
