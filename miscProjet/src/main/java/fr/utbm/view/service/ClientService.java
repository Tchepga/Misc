/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.utbm.view.service;

import fr.utbm.view.dao.ClientRepository;
import fr.utbm.view.entity.Client;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;


@Component
public class ClientService {

    @Autowired
    ClientRepository courseSessionRepository;

    public List<Client> getAllSession()
    {
        return courseSessionRepository.findAll();
    }
}
