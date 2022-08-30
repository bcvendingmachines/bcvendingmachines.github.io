package com.springapi.bcvm.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {
    @Id
    private Integer id;
    private String username;
    private String password;
    private String token;
    private Integer contributions;
    private String display_name;
    private String salt;

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

    public String getSalt() { return salt; }

    public void setSalt(String salt) { this.salt = salt; }
}
