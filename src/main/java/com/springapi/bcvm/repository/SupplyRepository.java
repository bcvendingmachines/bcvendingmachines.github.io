package com.springapi.bcvm.repository;

import com.springapi.bcvm.model.Supply;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface SupplyRepository extends MongoRepository<Supply, Integer> {

    @Query("SELECT supply2 FROM Supply supply2 WHERE supply2.id = (SELECT MAX(supply.id) from Supply supply WHERE supply.machine.id = :id)")
    Optional<Supply> findByMachineId(Integer id);
}
