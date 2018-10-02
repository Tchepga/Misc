/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.utbm.view.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author Experience
 */
@Entity
public class Place implements Serializable{
    
     @Id
     @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    
     @Column
    private String type;
    
     @Column
    private String country;
     
     @Column
     private String city;
     
     @Column
     private String postal;
     
     @Column
     private String adress;
     
     @Column
     private String complete;

    public Place() {
    }

    public Place(String type, String country, String city, String postal, String adresse, String complete) {
        this.type = type;
        this.country = country;
        this.city = city;
        this.postal = postal;
        this.adress = adresse;
        this.complete = complete;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

 
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostal() {
        return postal;
    }

    public void setPostal(String postal) {
        this.postal = postal;
    }

    public String getAdresse() {
        return adress;
    }

    public void setAdresse(String adresse) {
        this.adress = adresse;
    }

    public String getComplete() {
        return complete;
    }

    public void setComplete(String complete) {
        this.complete = complete;
    }
     
     
     
     
}
