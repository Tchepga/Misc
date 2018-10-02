/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.utbm.view.entity;

import java.io.Serializable;
import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 *
 * @author Experience
 */
@Entity
public class Hours implements Serializable{
    
   
    @Id
    private Date date;
    
    @Id
    private Date startDate;
    
    @Column
    private Date endDate;

    public Hours() {
    }

    public Hours(Date date, Date startDate, Date endDate) {
        this.date = date;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
    
    
}
