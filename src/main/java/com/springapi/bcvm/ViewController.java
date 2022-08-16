package com.springapi.bcvm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.Collections;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class ViewController {
    @Autowired
    private MachineRepository machineRepository;
    @Autowired
    private SupplyRepository supplyRepository;

    @GetMapping("/test")
    String testKeepalive() { return "test";}

    @GetMapping("/")
    String testIndex() { return "index";}

    @GetMapping("/test/machine")
    String testMachine(Model model) {
        model.addAttribute("machines", machineRepository.findAll());
        return "machineTest";
    }
    @GetMapping("/test/supply")
    String testSupply(Model model) {
        model.addAttribute("supplies", Collections.singletonList(supplyRepository.findByMachineId(1)));
        return "supplyTest";
    }
}
