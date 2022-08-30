package com.springapi.bcvm.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.springapi.bcvm.model.Machine;
import com.springapi.bcvm.model.Supply;
import com.springapi.bcvm.model.User;
import com.springapi.bcvm.repository.MachineRepository;
import com.springapi.bcvm.repository.SupplyRepository;
import com.springapi.bcvm.repository.UserRepository;
import com.springapi.bcvm.util.Captcha;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.util.*;

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

        return Optional.ofNullable(supplyRepository.findTopByOrderByMachineIdDesc(Integer.valueOf(machineId)));
    }

    @GetMapping("/user/{username}")
    User getUser(@PathVariable String username){ return userRepository.findByUsername(username); }

    @PostMapping("/save")
    @ResponseBody
    Supply save(@RequestBody Supply supply) {
        try {
            if (passesCaptcha(supply.getToken())){
                supply.setToken(null);
                return supplyRepository.save(supply);
            } else {
                return null;
            }
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
                User foundUser = userRepository.findByUsername(user.getUsername());

                if (foundUser.getPassword().equals(createHash(user.getPassword(), Base64.getDecoder()
                        .decode(foundUser.getSalt())))){
                    return Optional.of(foundUser);
                } else {
                    return Optional.empty();
                }
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

                    byte[] salt = new SecureRandom().generateSeed(12);
                    user.setSalt(Base64.getEncoder().encodeToString(salt));
                    user.setPassword(createHash(user.getPassword(), salt));
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
        String url = "https://www.google.com/recaptcha/api/siteverify?secret="+new Captcha().getSecretKey() +"&response="+token;
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

    String createHash(String password, byte[] salt){
        try {
            return Base64.getMimeEncoder().encodeToString(SecretKeyFactory.getInstance("PBKDF2WithHmacSHA512")
                    .generateSecret(new PBEKeySpec(password.toCharArray(), salt, 10, 512))
                    .getEncoded());
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}