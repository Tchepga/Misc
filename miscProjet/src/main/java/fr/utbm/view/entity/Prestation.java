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
public class Prestation implements Serializable{
    
    @Id
    private String labelRole;
    
    @Column
    private String descriptionRole;

    public String getLabelRole() {
        return labelRole;
    }

    public void setLabelRole(String labelRole) {
        this.labelRole = labelRole;
    }

    public String getDescriptionRole() {
        return descriptionRole;
    }

    public void setDescriptionRole(String descriptionRole) {
        this.descriptionRole = descriptionRole;
    }
    
    
    
}
