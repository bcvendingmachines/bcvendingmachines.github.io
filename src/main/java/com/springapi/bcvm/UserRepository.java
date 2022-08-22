package com.springapi.bcvm;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUsername(String username);
    Optional<User> findUserByUsernameAndPassword(String username, String password);
    boolean existsUserByUsername(String username);
}
