package com.example.demo.controller;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/users")
public class UserController {
    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping("/test")
    public String doTest(){
        return "hello world";
    }

    @GetMapping("/all")
    public List<User> findAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/mix")
    public User findAllAdminUsers(){
        Role role = new Role();
        role.setId(1L);
        return userRepository.findByRole(role);
    }
}
