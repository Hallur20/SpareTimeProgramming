package com.example.demo.entity;
import javax.persistence.*;

@Entity
@Table(name="User")
public class User {

    @Id
    @GeneratedValue
    private long id;

    private String userName;
    private String email;
    private String password;

    @ManyToOne
    @JoinColumn(name="roleId")
    private Role role;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
