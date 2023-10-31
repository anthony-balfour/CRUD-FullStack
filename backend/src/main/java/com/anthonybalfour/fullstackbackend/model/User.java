package com.anthonybalfour.fullstackbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

//Entity automatically creates the user table with the Spring Boot application with MySQL
@Entity
public class User {
    //ID will be auto generated so use these:
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String name;
    private String email;

    //For getters and setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
