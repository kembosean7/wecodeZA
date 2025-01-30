package com.wecodeZA.backend.User;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/wecode")
public class UserController {

    public UserController(UserService useService) {
        this.useService = useService;
    }

    private final UserService useService;

    @GetMapping("/users")
    public List<UserEntity> getUsers(){
    return useService.getUsers();


    }

}
