/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.utbm.view.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.*;

/**
 *
 * @author Experience
 */
@Entity
public class SavePlace implements Serializable{
    
    @Id
    @ManyToOne
    private Place place;
    
    @Column
    private Client user;
    
    
}
