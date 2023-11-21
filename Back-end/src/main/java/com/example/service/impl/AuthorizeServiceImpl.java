package com.example.service.impl;

import com.example.entity.Account;
import com.example.mapper.UserMapper;
import com.example.service.AuthorizeService;
import  jakarta.annotation.Resource;
import org.springframework.security.core.userdetails.User;
import  org.springframework.security.core.userdetails.UserDetails;
import  org.springframework.security.core.userdetails.UsernameNotFoundException;
import  org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class AuthorizeServiceImpl implements AuthorizeService {
    @Resource
    UserMapper mapper;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        if(username == null)
            throw new UsernameNotFoundException("Username cant be empty");
        Account account = mapper.FindAccountByNameOrEmail(username);
        if(account == null)
            throw new UsernameNotFoundException("Wrong Username or Password");
        return  User
                .withUsername((account.getUsername()))
                .password((account.getPassword()))
                .roles("user")
                .build();
    }
    public boolean sendValidateEmail(String email){
        Random random = new Random();
        int code = random.nextInt(899999)+100000;

        return false;
    }
}