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
    void saveMachines(@RequestBody Machine machine){
        machineRepository.save(machine);
    }

    @PostMapping("/save")
    @ResponseBody
    void save(@RequestBody Supply supply){
        supplyRepository.save(supply);
    }
}
