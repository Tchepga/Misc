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
public class TypeUser implements Serializable{
 
    @Id
    private String typeUser;
    
    @Column
    private String reduction;

    public String getTypeUser() {
        return typeUser;
    }

    public void setTypeUser(String typeUser) {
        this.typeUser = typeUser;
    }

    public String getReduction() {
        return reduction;
    }

    public void setReduction(String reduction) {
        this.reduction = reduction;
    }
    
    
}
