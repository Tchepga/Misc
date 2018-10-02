/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.utbm.view.controllers;

import fr.utbm.view.dao.ClientRepository;
import fr.utbm.view.entity.Client;
import java.util.List;
import jdk.nashorn.internal.scripts.JS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author ptchepga
 *  class role :manage user
 */

@Controller
public class ClientController {
    
    @Autowired
    ClientRepository clientRepository;
    
    @RequestMapping(value="/inscription", method=RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<?> showClients(Model model) {
        
        List<Client> clients = clientRepository.findAll();
        System.out.println(clients);
        
        //model.addAttribute("clienInfo", clients);
        return clients;
    }
}
