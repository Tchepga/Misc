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
@Table(name="Client")
public class Client implements Serializable {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
 
    
    @Column
    private String email;
    
    @Column 
    private Date dateInscription;
    
    @Column 
    private String password;
    
    @Column
    private Date dateOnLastConnexion;
    
    @Column 
    private Integer tel;
    
    @Column
    private String lastname;
    
    @Column
    private String firstname;
    
    @Column
    private Date dateBorn;
    
    @Column(nullable = true)
    private String nameEntreprise;

    @Column(nullable = true)
    private Integer siret;

    public Client()
    {}
    public Client(String email, Date dateInscription, String password, Date dateOnLastConnexion, Integer tel, String lastname, String firstname, Date dateBorn, String nameEntreprise, Integer siret) {
        this.email = email;
        this.dateInscription = dateInscription;
        this.password = password;
        this.dateOnLastConnexion = dateOnLastConnexion;
        this.tel = tel;
        this.lastname = lastname;
        this.firstname = firstname;
        this.dateBorn = dateBorn;
        this.nameEntreprise = nameEntreprise;
        this.siret = siret;
    }

    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
 
    public boolean isAccountNonExpired() {
        return false;
    }
    
    public boolean isAccountNonLocked() {
        return false;
    }
    
    public boolean isCredentialsNonExpired() {
        return false;
    }
   
    public boolean isEnabled() {
        return false;
    }
    /*@Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }*/

   

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDateInscription() {
        return dateInscription;
    }

    public void setDateInscription(Date dateInscription) {
        this.dateInscription = dateInscription;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getDateOnLastConnexion() {
        return dateOnLastConnexion;
    }

    public void setDateOnLastConnexion(Date dateOnLastConnexion) {
        this.dateOnLastConnexion = dateOnLastConnexion;
    }

    public Integer getTel() {
        return tel;
    }

    public void setTel(Integer tel) {
        this.tel = tel;
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

    public Date getDateBorn() {
        return dateBorn;
    }

    public void setDateBorn(Date dateBorn) {
        this.dateBorn = dateBorn;
    }

    public String getNameEntreprise() {
        return nameEntreprise;
    }

    public void setNameEntreprise(String nameEntreprise) {
        this.nameEntreprise = nameEntreprise;
    }

    public Integer getSiret() {
        return siret;
    }

    public void setSiret(Integer siret) {
        this.siret = siret;
    }
    
    
}
