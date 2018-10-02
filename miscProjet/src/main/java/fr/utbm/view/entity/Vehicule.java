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
public class Vehicule implements Serializable{
    
    @Id
    private String matricule;
    
    @Column
    private String marque;
    
    @Column
    private String modele;
    
    @Column
    private Date  anneeFabrication;
    
    @Column
    private Integer poidsChargeVehicule;
    
    @Column
    private Integer poidsVideVehicule;
    
    @Column
    private Integer capacite;
    
    @Column
    private Integer volumeTransport;
    
    @ManyToOne
    @JoinColumn private TypeVehicule type;

    public Vehicule(String matricule, String marque, String modele, Date anneeFabrication, Integer poidsChargeVehicule, Integer poidsVideVehicule, Integer capacite, Integer volumeTransport, TypeVehicule type) {
        this.matricule = matricule;
        this.marque = marque;
        this.modele = modele;
        this.anneeFabrication = anneeFabrication;
        this.poidsChargeVehicule = poidsChargeVehicule;
        this.poidsVideVehicule = poidsVideVehicule;
        this.capacite = capacite;
        this.volumeTransport = volumeTransport;
        this.type = type;
    }

    
    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getModele() {
        return modele;
    }

    public void setModele(String modele) {
        this.modele = modele;
    }

    public Date getAnneeFabrication() {
        return anneeFabrication;
    }

    public void setAnneeFabrication(Date anneeFabrication) {
        this.anneeFabrication = anneeFabrication;
    }

    public Integer getPoidsChargeVehicule() {
        return poidsChargeVehicule;
    }

    public void setPoidsChargeVehicule(Integer poidsChargeVehicule) {
        this.poidsChargeVehicule = poidsChargeVehicule;
    }

    public Integer getPoidsVideVehicule() {
        return poidsVideVehicule;
    }

    public void setPoidsVideVehicule(Integer poidsVideVehicule) {
        this.poidsVideVehicule = poidsVideVehicule;
    }

    public Integer getCapacite() {
        return capacite;
    }

    public void setCapacite(Integer capacite) {
        this.capacite = capacite;
    }

    public Integer getVolumeTransport() {
        return volumeTransport;
    }

    public void setVolumeTransport(Integer volumeTransport) {
        this.volumeTransport = volumeTransport;
    }

    public TypeVehicule getType() {
        return type;
    }

    public void setType(TypeVehicule type) {
        this.type = type;
    }
    
    
    
}
