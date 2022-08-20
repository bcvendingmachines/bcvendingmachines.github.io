package com.springapi.bcvm;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class RouteController {
    private final MachineRepository machineRepository;
    private final SupplyRepository supplyRepository;
    private final UserRepository userRepository;

    @Autowired
    public RouteController(MachineRepository machineRepository, SupplyRepository supplyRepository, UserRepository userRepository){
        this.machineRepository = machineRepository;
        this.supplyRepository = supplyRepository;
        this.userRepository = userRepository;
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
        RestTemplate restTemplate = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();
        String secretKey = new Captcha().getSecretKey();
        try {
            String url = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey +"&response="+supplyToken.getToken();
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
    @GetMapping("/login/{user}")
    public Optional<User> logIn(@PathVariable String user) {
        System.out.println(user);
        return Optional.empty();
//        return userRepository.findUserByUsernameAndPassword(user);
    }
}
