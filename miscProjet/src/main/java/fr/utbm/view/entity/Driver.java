/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.utbm.view.entity;

import java.io.Serializable;
import javax.persistence.*;

/**
 *
 * @author Experience
 */
@Entity
@Table(name="driver")
public class Driver implements Serializable{
   
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private String matricule;
    
    @Column
    private String lastname;
    
    @Column
    private String firstname;
    
    @Column
    private String country;
    
    @Column 
    private String city;
    
    @Column 
    private Integer postal;
    
    @Column
    private String adress;
    
    @Column
    private String complete;

    public Driver() {
    }

    public Driver(String lastname, String firstname, String country, String city, Integer postal, String adress, String complete) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.country = country;
        this.city = city;
        this.postal = postal;
        this.adress = adress;
        this.complete = complete;
    }

    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
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

    public Integer getPostal() {
        return postal;
    }

    public void setPostal(Integer postal) {
        this.postal = postal;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getComplete() {
        return complete;
    }

    public void setComplete(String complete) {
        this.complete = complete;
    }
    
    
}
