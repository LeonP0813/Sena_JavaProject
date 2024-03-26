package com.sena1.sena1.service;

import com.sena1.sena1.model.Client;

import java.util.List;

public interface userService {
    public Client saveClient(Client client);
    public List<Client> getAllClients();
}
