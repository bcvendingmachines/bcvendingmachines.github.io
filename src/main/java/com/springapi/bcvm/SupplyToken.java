package com.springapi.bcvm;

public class SupplyToken {

    private String token;

    private Supply supply;

    public String getToken() {
        return token;
    }

    public Supply getSupply() { return supply; }

    public void setToken(String token) {
        this.token = token;
    }
    public void setSupply(Supply supply) { this.supply = supply; }

}
