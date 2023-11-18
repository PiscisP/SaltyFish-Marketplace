package com.test.dataaccess.entity;

import java.io.Serializable;
public class UserDO implements Serializable {

    private String u_id;
    private String username;
    private String email;
    private String phone_num;
    private String address;
    private String scu_id;
    private String password;
    private String First_name;
    private String Last_name;

    public String getU_id() {
        return  u_id;
    }

    public void setU_id(String u_id) {
        this.u_id = u_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone_num() {
        return phone_num;
    }

    public void setPhone_num(String phone_num) {
        this.phone_num = phone_num;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getScu_id() {
        return scu_id;
    }

    public void setScu_id(String scu_id) {
        this.scu_id = scu_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirst_name() {
        return First_name;
    }

    public void setFirst_name(String first_name) {
        this.First_name = first_name;
    }

    public String getLast_name() {
        return Last_name;
    }

    public void setLast_name(String last_name) {
        this.Last_name = last_name;
    }
}

