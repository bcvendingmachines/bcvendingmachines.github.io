package com.springapi.bcvm;

import org.springframework.data.annotation.Id;

import javax.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "supply")
public class Supply {
    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name="machine", nullable=false)
    private Machine machine;
    private Date time_checked;
    private boolean coffee;
    private boolean short_supply;
    private String checked_by;

    public Supply() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Machine getMachine() {
        return machine;
    }

    public void setMachine(Machine machine) {
        this.machine = machine;
    }

    public Date getTime_checked() {
        return time_checked;
    }

    public void setTime_checked(Date time_checked) {
        this.time_checked = time_checked;
    }

    public boolean isCoffee() {
        return coffee;
    }

    public void setCoffee(boolean coffee) {
        this.coffee = coffee;
    }

    public boolean isShort_supply() {
        return short_supply;
    }

    public void setShort_supply(boolean short_supply) {
        this.short_supply = short_supply;
    }

    public String getChecked_by() {
        return checked_by;
    }

    public void setChecked_by(String checked_by) {
        this.checked_by = checked_by;
    }

}
