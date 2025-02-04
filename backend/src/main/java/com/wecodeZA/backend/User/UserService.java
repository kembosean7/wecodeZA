package com.wecodeZA.backend.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Objects;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return  userRepository.findAll();
    }

    public void addNewUser(User user) {
        Optional<User> accountOptional = userRepository.findUserByEmail(user.getEmail());
        if (accountOptional.isPresent()){
            throw new IllegalStateException(("Email already taken"));
        }
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));

        userRepository.save(user);
    }

    public void deleteUser(Long id) {

        boolean exist = userRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("Account with ID: " + id + " does not exist");
        }

        userRepository.deleteById(id);
    }

    @Transactional
    public void updateUser(Long id, String name, String lastname, String email, String username, String profession, String bio) {
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalStateException("Account with ID: " + id + " does not exist"));

        if (name != null && !name.isEmpty() && !Objects.equals(user.getName(), name)) {
            user.setName(name.trim());
        }
        if (lastname != null && !lastname.isEmpty() && !Objects.equals(user.getLastname(), lastname)) {
            user.setLastname(lastname);
        }

        if (email != null && !email.isEmpty() && !Objects.equals(user.getEmail(), email)) {
            Optional<User> accountOptional = userRepository.findUserByEmail(email);
            if (accountOptional.isPresent()) {
                throw new IllegalStateException("Email already taken");
            }
            user.setEmail(email);
        }

        if (username != null && !username.isEmpty() && !Objects.equals(user.getUsername(), username)) {
            Optional<User> userOptional = userRepository.findUserByUsername(username);
            if (userOptional.isPresent()) {
                throw new IllegalStateException("Username already taken");
            }
            user.setUsername(username);
        }
        if (bio != null && !bio.isEmpty() && !Objects.equals(user.getBio(), bio)){
            user.getBio();
        }
        userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalStateException("User with ID " + id + " not found"));
    }
}

