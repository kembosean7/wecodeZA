package com.wecodeZA.backend.User;

import org.springframework.transaction.annotation.Transactional;
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

    @GetMapping(path = "/users/{id}")
    public User getUserById(@PathVariable("id")Long id){
        return useService.getUserById(id);
    }

    @PostMapping("users/signup")
    public void signupUser(@RequestBody User user){
        useService.addNewUser(user);
    }

    @DeleteMapping(path = "/users/{id}")
    public void deleteUser(@PathVariable("id") Long id){
        useService.deleteUser(id);
    }

    @PutMapping(path = "/users/{id}")
    public void updateUser(
            @PathVariable("id") Long id,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String lastname,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String profession,
            @RequestParam(required = false) String bio){
        useService.updateUser(id, name, lastname, email, username, profession, bio);
    }




}
