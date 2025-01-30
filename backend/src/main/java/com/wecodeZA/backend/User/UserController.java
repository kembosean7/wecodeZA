package com.wecodeZA.backend.User;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/wecode")
public class UserController {

    public UserController(UserService useService) {
        this.useService = useService;
    }

    private final UserService useService;

    @GetMapping("/users")
    public List<User> getUsers(){
        return useService.getUsers();


    }

    @PostMapping("/register")
    public void registerUser(@RequestBody User user){
        useService.addNewUser(user);
    }

}
