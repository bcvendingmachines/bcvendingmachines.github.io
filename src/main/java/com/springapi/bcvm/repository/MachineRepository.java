package com.springapi.bcvm.repository;

import com.springapi.bcvm.model.Machine;
import org.springframework.data.repository.CrudRepository;

public interface MachineRepository extends CrudRepository<Machine, Integer> {
}
