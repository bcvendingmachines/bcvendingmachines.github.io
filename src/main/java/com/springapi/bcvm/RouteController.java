package com.springapi.bcvm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class RouteController {
    @Autowired
    private MachineRepository machineRepository;
    @Autowired
    private SupplyRepository supplyRepository;

    @GetMapping("/machines")
    public List<Machine> getMachines() {
        return (List<Machine>) machineRepository.findAll();
    }

    @GetMapping("/supply/{machineId}")
    public Optional<Supply> getSupply(@PathVariable String machineId) {
        return supplyRepository.findByMachineId(Integer.valueOf(machineId));
    }

    @PostMapping("/saveMachines")
    @ResponseBody
    Machine saveMachines(@RequestBody Machine machine){
        return machineRepository.save(machine);
    }

    @PostMapping("/save")
    @ResponseBody
    Supply save(@RequestBody Supply supply){
        return supplyRepository.save(supply);
    }
}
