package com.springapi.bcvm;

import org.springframework.data.annotation.Id;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String password;
    private String token;
    private Integer contributions;
    private String display_name;

    public User() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getToken() { return token; }

    public void setToken(String token) { this.token = token; }

    public Integer getContributions() { return contributions; }

    public void setContributions(Integer contributions) { this.contributions = contributions; }

    public String getDisplay_name() { return display_name; }

    public void setDisplay_name(String display_name) { this.display_name = display_name; }
}
