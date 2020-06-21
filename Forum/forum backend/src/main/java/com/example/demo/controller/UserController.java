package com.example.demo.controller;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.logic.UserLogic;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/users")
public class UserController {
    private UserRepository userRepository;
    private UserLogic userLogic;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
        this.userLogic = new UserLogic();
    }

    @GetMapping("/test")
    public String doTest(){
        return "hello world";
    }

    @CrossOrigin(origins = "${frontend}")
    @GetMapping("/all")
    public List<User> findAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/admin")
    public List<User> findUsersByRole(){
        Role role = new Role();
        role.setId(3L);
        
        return userRepository.findByRole(role);
    }

    //http://localhost:8080/api/users/create?userName=test&email=test&password=123&roleName=admin
    @PostMapping("/create")
    public User createUser(@RequestParam String userName, String email, String password, String roleName){
        return userLogic.createUser(userName, email, password, roleName, userRepository);
    }
    //http://localhost:8080/api/users/login?userNameOrEmail=test&password=123
    @CrossOrigin(origins = "${frontend}")
    @PostMapping("/login")
    public User login(@RequestParam String userNameOrEmail, String password){
        boolean success = userLogic.userLogin(userNameOrEmail, password, userRepository);
        if(success == true){
            if(userRepository.findByEmail(userNameOrEmail) != null){
                return userRepository.findByEmail(userNameOrEmail);
            }
            if(userRepository.findByUserName(userNameOrEmail) != null){
                return userRepository.findByUserName(userNameOrEmail);
            }
        }
        return null;
    }
}
