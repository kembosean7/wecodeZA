package com.wecodeZA.backend.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private  final UserRepository userRepository;

    public List<UserEntity> getUsers() {
        return  userRepository.findAll();




    }
}
