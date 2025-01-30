package com.wecodeZA.backend.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private  final UserRepository userRepository;

    public List<User> getUsers() {
        return  userRepository.findAll();
    }

    public void addNewUser(User user) {
        Optional<User> accountOptional = userRepository.findUserByEmail(user.getEmail());
        if (accountOptional.isPresent()){
            throw new IllegalStateException(("Email already taken"));
        }
        userRepository.save(user);
    }

    public void deleteUser(Long id) {

        boolean exist = userRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("Account with ID: " + id + " does not exist");
        }

        userRepository.deleteById(id);
    }
}

