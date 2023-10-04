package com.anthony.studentsystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import javax.annotation.processing.Generated;

// Entity maps this class as a table in the database
@Entity
public class Student {
    @Id // marks this as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //automatically generate primary key values upon insertion
    private int id;
    private String name;
    private String address;

    public Student() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
