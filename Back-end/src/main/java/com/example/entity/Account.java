package com.example.entity;

import lombok.Data;

@Data
public class Account {
    int id;
    String username;
    String email;
    String password;
}