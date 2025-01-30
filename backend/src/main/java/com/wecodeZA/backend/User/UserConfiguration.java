package com.wecodeZA.backend.User;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfiguration {

    CommandLineRunner commandLineRunner(
            UserRepository repository) {
        return args -> {
            UserEntity sean = new UserEntity(
                    "sekembojhb024@student.wethinkcode",
                    "Kembo",
                    "kembosean7",
                    "Sean");

            UserEntity jean = new UserEntity(
                    "jclaudhjbh024@student.wethinkcode",
                    "Kumm",
                    "jeankum22",
                    "Jean-Claud");


        };
    }


}
