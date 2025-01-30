package com.wecodeZA.backend.User;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/wecode")
public class UserController {

    @GetMapping("/users")
    public List<UserEntity> getUsers(){
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
