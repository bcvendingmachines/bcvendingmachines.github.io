package com.springapi.bcvm;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
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
    Supply save(@RequestBody SupplyToken supplyToken) {
        Captcha captcha = new Captcha();
        RestTemplate restTemplate = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();
        try {
            String url = captcha.getUrl() + captcha.getSecret_key()+"&response="+supplyToken.getToken();
            HashMap map = mapper.readValue(restTemplate.getForObject(url, String.class), HashMap.class);
            if (map.get("success").equals(true)){
                return supplyRepository.save(supplyToken.getSupply());
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
