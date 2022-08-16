package com.springapi.bcvm;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface SupplyRepository extends CrudRepository<Supply, Integer> {
    @Query("SELECT supply2 FROM Supply supply2 WHERE supply2.id = (SELECT MAX(supply.id) from Supply supply WHERE supply.machine.id = :id)")
    Optional<Supply> findByMachineId(Integer id);
}
