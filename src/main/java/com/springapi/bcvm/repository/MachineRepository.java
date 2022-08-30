package com.springapi.bcvm.repository;

import com.springapi.bcvm.model.Machine;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MachineRepository extends MongoRepository<Machine, Integer> {
}
