package com.wecodeZA.backend.User;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    public List<UserEntity> getUsers() {
        return List.of(
                new UserEntity(
                        1L,
                        "sekembojhb024@student.wethinkcode",
                        "Kembo",
                        "Sean"
                ),
                new UserEntity(
                        2L,
                        "jclaudhjbh024@student.wethinkcode",
                        "Kumm",
                        "Jean-Claud"
                )

        );


    }
}
