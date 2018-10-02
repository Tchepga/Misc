/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.utbm.view.dao;
import fr.utbm.view.entity.Client;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Experience
 */
public interface ClientRepository extends JpaRepository<Client, Integer>{
    
    
}
