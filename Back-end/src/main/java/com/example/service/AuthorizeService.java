package com.example.service;

import com.example.entity.Account;
import com.example.mapper.UserMapper;
import  jakarta.annotation.Resource;
import org.springframework.security.core.userdetails.User;
import  org.springframework.security.core.userdetails.UserDetailsService;
import  org.springframework.security.core.userdetails.UserDetails;
import  org.springframework.security.core.userdetails.UsernameNotFoundException;
import  org.springframework.stereotype.Service;

@Service
public class AuthorizeService implements UserDetailsService{
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
}