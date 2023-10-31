package com.anthonybalfour.fullstackbackend.repository;

import com.anthonybalfour.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

//JpaRepository takes in User? and type of ID
public interface UserRepository extends JpaRepository<User, Long> {
}
