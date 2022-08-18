package com.springapi.bcvm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin
@RestController
public class RouteController {
    private final MachineRepository machineRepository;
    private final SupplyRepository supplyRepository;

    @Autowired
    public RouteController(MachineRepository machineRepository, SupplyRepository supplyRepository){
        this.machineRepository = machineRepository;
        this.supplyRepository = supplyRepository;
    }

    @GetMapping("/machines")
    public List<Machine> getMachines() {
        return (List<Machine>) machineRepository.findAll();
    }

    @GetMapping("/supply/{machineId}")
    public Optional<Supply> getSupply(@PathVariable String machineId) {
        return supplyRepository.findByMachineId(Integer.valueOf(machineId));
    }

    @PostMapping("/save")
    @ResponseBody
    Supply save(@RequestBody SupplyToken supplyToken){
        Captcha captcha = new Captcha();
        String url = captcha.getUrl() + captcha.getSecret_key()+"&response="+supplyToken.getToken();
        return supplyRepository.save(supplyToken.getSupply());
    }
}
