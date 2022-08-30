package com.springapi.bcvm.repository;

import com.springapi.bcvm.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Integer> {
    User findByUsername(String username);
    boolean existsUserByUsername(String username);
}