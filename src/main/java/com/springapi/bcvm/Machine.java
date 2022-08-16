package com.springapi.bcvm;

import org.springframework.data.annotation.Id;

import javax.persistence.*;

@Entity
@Table(name = "machine")
public class Machine {
    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
