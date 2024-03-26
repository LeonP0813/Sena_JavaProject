package com.sena1.sena1.service;

import com.sena1.sena1.model.Client;
import com.sena1.sena1.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userServImple implements userService {
    @Autowired
    private userRepository userRepository;

    @Override
    public Client saveClient(Client client) {
        return userRepository.save(client);
    }

    @Override
    public List<Client> getAllClients() {
        return userRepository.findAll();
    }
}
