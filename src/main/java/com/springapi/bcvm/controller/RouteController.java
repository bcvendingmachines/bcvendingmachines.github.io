package com.springapi.bcvm.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.springapi.bcvm.model.Machine;
import com.springapi.bcvm.model.Supply;
import com.springapi.bcvm.model.User;
import com.springapi.bcvm.repository.MachineRepository;
import com.springapi.bcvm.repository.SupplyRepository;
import com.springapi.bcvm.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import java.sql.Date;
import java.util.Collections;
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

    @GetMapping("/user/{username}")
    User getUser(@PathVariable String username){ return userRepository.findByUsername(username); }

    @PostMapping("/save")
    @ResponseBody
    Supply save(@RequestBody Supply supply) {
        try {
            return supplyRepository.save(supply);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    @PostMapping("/login")
    @ResponseBody
    public Optional<User> logIn(@RequestBody User user) {
        try {
            if (passesCaptcha(user.getToken())){
                return userRepository.findUserByUsernameAndPassword(user.getUsername(), user.getPassword());
            } else {
                return Optional.empty();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return Optional.empty();
        }
    }

    @PostMapping("/create")
    @ResponseBody
    public User createAccount(@RequestBody User user) {
        try {
            if (passesCaptcha(user.getToken())){
                if (userRepository.existsUserByUsername(user.getUsername())){
                    return new User();
                } else {
                    user.setId(null);
                    user.setToken(null);
                    return userRepository.save(user);
                }
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @PostMapping("/updateUser")
    @ResponseBody
    public User updateUser(@RequestBody User user) {
        try {
            if (passesCaptcha(user.getToken())){
                user.setToken(null);
                return userRepository.save(user);
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    boolean passesCaptcha(String token) {
        String url = "https://www.google.com/recaptcha/api/siteverify?secret="+System.getenv("SECRET_KEY")+"&response="+token;
        ObjectMapper mapper = new ObjectMapper();
        RestTemplate restTemplate = new RestTemplate();
        try {
            HashMap map = mapper.readValue(restTemplate.getForObject(url, String.class), HashMap.class);
            return map.get("success").equals(true);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    @PostMapping("/populate")
    public void populateMachines(Supply supply){
        if (!machineRepository.findById(1).isPresent()){

            Supply wpSupply = new Supply();
            wpSupply.setShort_supply(true);
            wpSupply.setChecked_by("Zach");
            wpSupply.setCoffee(true);
            wpSupply.setTime_checked(new Date(2022, 8, 24));
            wpSupply.setUser_id(userRepository.findByUsername("zach"));
            Optional<Machine> wpMachine = machineRepository.findById(1);
            wpSupply.setMachine(toList(wpMachine).get(1));
            save(wpSupply);
            Supply draperSupply = new Supply();
            draperSupply.setShort_supply(true);
            draperSupply.setChecked_by("Zach");
            draperSupply.setCoffee(true);
            draperSupply.setTime_checked(new Date(2022, 8, 24));
            draperSupply.setUser_id(userRepository.findByUsername("zach"));
            Optional<Machine> draperMachine = machineRepository.findById(2);
            draperSupply.setMachine(toList(draperMachine).get(2));
            save(draperSupply);

            Supply hutchinsSupply = new Supply();
            hutchinsSupply.setShort_supply(true);
            hutchinsSupply.setChecked_by("Zach");
            hutchinsSupply.setCoffee(true);
            hutchinsSupply.setTime_checked(new Date(2022, 8, 24));
            hutchinsSupply.setUser_id(userRepository.findByUsername("zach"));
            Optional<Machine> hutchinsMachine = machineRepository.findById(3);
            hutchinsSupply.setMachine(toList(hutchinsMachine).get(3));
            save(hutchinsSupply);

            Supply alumniSupply = new Supply();
            alumniSupply.setShort_supply(true);
            alumniSupply.setChecked_by("Zach");
            alumniSupply.setCoffee(true);
            alumniSupply.setTime_checked(new Date(2022, 8, 24));
            alumniSupply.setUser_id(userRepository.findByUsername("zach"));
            Optional<Machine> alumniMachine = machineRepository.findById(3);
            alumniSupply.setMachine(toList(alumniMachine).get(3));
            save(alumniSupply);

            Supply seaburySupply = new Supply();
            seaburySupply.setShort_supply(true);
            seaburySupply.setChecked_by("Zach");
            seaburySupply.setCoffee(true);
            seaburySupply.setTime_checked(new Date(2022, 8, 24));
            seaburySupply.setUser_id(userRepository.findByUsername("zach"));
            Optional<Machine> seaburyMachine = machineRepository.findById(3);
            seaburySupply.setMachine(toList(seaburyMachine).get(3));
            save(seaburySupply);
        }
    }
    public static <T> List<T> toList(Optional<T> opt) {
        return opt
                .map(Collections::singletonList)
                .orElseGet(Collections::emptyList);
    }
}