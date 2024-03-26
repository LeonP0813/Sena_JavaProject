package com.sena1.sena1.controller;

import com.sena1.sena1.model.Client;
import com.sena1.sena1.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
@CrossOrigin
public class userContro {
    @Autowired
    private userService userService;

    @PostMapping("/add")
    public String add(@RequestBody Client client){
        userService.saveClient(client);
        return "New client is added";
    }
    @GetMapping("/getAll")
    public List<Client> getAllClient(){
        return userService.getAllClients();
    }

}
