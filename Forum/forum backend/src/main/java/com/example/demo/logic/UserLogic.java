package com.example.demo.logic;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

public class UserLogic implements UserLogicInterface{
    @Override
    public User createUser(String userName, String email, String password, String roleName, UserRepository userRepository) {
        Role role = new Role();
        if(roleName.equals("user")){
            role.setId(1L);
        }
        if(roleName.equals("super user")){
            role.setId(2L);
        }
        if(roleName.equals("admin")){
            role.setId(3L);
        }
        User user = new User();
        user.setUserName(userName);
        user.setEmail(email);
        user.setPassword(password);
        user.setRole(role);
        userRepository.save(user);
        return user;
    }

    @Override
    public boolean userLogin(String userNameOrEmail, String password, UserRepository userRepository) {
        boolean successLogin = false;
        for (User user: userRepository.findAll()){
            if(user.getUserName() == null || user.getEmail() == null || user.getPassword() == null){
                continue;
            }
            if((user.getUserName().equals(userNameOrEmail) || user.getEmail().equals(userNameOrEmail))
                    && user.getPassword().equals(password)){
                successLogin = true;
                break;
            }
        }
        return successLogin;
    }

    @Override
    public String getUserPrivelege(String userNameOrEmail, UserRepository userRepository) {
        return null;
    }
}
