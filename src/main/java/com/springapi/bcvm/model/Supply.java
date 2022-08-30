package com.springapi.bcvm.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Collection;
import java.util.Date;

@Document
public class Supply {
    @Id
    private Integer id;
    @DBRef
    private Collection<Machine> machine;
    @DBRef
    private Collection<User> user_id;
    private Date time_checked;
    private boolean coffee;
    private boolean short_supply;
    private String checked_by;
    private String token;

    public Supply() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Collection<Machine> getMachine() { return machine; }

    public void setMachine(Collection<Machine> machine) { this.machine = machine; }

    public Collection<User> getUser_id() { return user_id; }

    public void setUser_id(Collection<User> user_id) { this.user_id = user_id; }

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

    public String getToken() { return token; }

    public void setToken(String token) { this.token = token; }
}
