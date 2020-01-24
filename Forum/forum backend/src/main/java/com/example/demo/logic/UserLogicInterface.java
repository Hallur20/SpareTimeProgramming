package com.example.demo.logic;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

public interface UserLogicInterface {
    User createUser(String userName, String email, String password, String roleName, UserRepository userRepository);
    boolean userLogin(String userNameOrEmail, String password, UserRepository userRepository);
    String getUserPrivelege(String userNameOrEmail, UserRepository userRepository);
}
