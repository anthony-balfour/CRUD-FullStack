package com.anthonybalfour.fullstackbackend.controller;

import com.anthonybalfour.fullstackbackend.exception.UserNotFoundException;
import com.anthonybalfour.fullstackbackend.model.User;
import com.anthonybalfour.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



import java.util.List;
import java.util.Optional;

@RestController
// Connecting front end to this server
@CrossOrigin("http://localhost:3000")
public class UserController {
    //inject the user repository
    @Autowired
    private UserRepository userRepository;

    //post and return the data
    //using the path
    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    //Run the application
    //Use Postman to test API

    //For getting data from the database
    //this is the path
    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }


    // for editing the user, must first grab the user
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }

    // editing the user

    @PutMapping("user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @DeleteMapping("user/{id}")
    String deleteUser(@PathVariable Long id) {
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        Optional<User> user = userRepository.findById(id);
        userRepository.deleteById(id);
        return "User with id \"" + id + "\" and name \"" + user.get().getName() + "\" has been deleted successfully";
    }
}
