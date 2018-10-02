/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.utbm.view.entity;

import java.io.Serializable;
import java.sql.Date;
import javax.persistence.*;

/**
 *
 * @author Experience
 */
@Entity
@Table(name="Avaibility")
public class Avaibility implements Serializable{
    
    @Id
    @ManyToOne
    private Vehicule vehicule;
    
    @Id
    @OneToOne
    private Hours hours;
    
    @Column  
    private Place lieu;

    public Avaibility() {
    }

    public Avaibility(Vehicule vehicule, Hours hours, Place lieu) {
        this.vehicule = vehicule;
        this.hours = hours;
        this.lieu = lieu;
    }

   

    
    public Vehicule getVehicule() {
        return vehicule;
    }

    public void setVehicule(Vehicule vehicule) {
        this.vehicule = vehicule;
    }

    public Hours getHours() {
        return hours;
    }

    public void setHours(Hours hours) {
        this.hours = hours;
    }


    public Place getLieu() {
        return lieu;
    }

    public void setLieu(Place lieu) {
        this.lieu = lieu;
    }
    
    
}
