package com.example.service.impl;

import com.example.entity.Account;
import com.example.mapper.UserMapper;
import com.example.service.AuthorizeService;
import  jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.userdetails.User;
import  org.springframework.security.core.userdetails.UserDetails;
import  org.springframework.security.core.userdetails.UsernameNotFoundException;
import  org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Random;
import java.util.concurrent.TimeUnit;

@Service
public class AuthorizeServiceImpl implements AuthorizeService {
    @Value("${spring.mail.username}")
    String from;
    @Resource
    UserMapper mapper;
    @Resource
    MailSender mailSender;
    @Resource
    StringRedisTemplate template;
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
    public boolean sendValidateEmail(String email, String sessionId){
        String key = "email:" + sessionId + ":"+ email;
        if(Boolean.TRUE.equals(template.hasKey(key)))
        {
            Long expire = Optional.ofNullable(template.getExpire(key,TimeUnit.SECONDS)).orElse(0L);
            if(expire>120)
                return false;
        }
        Random random = new Random();
        int code = random.nextInt(899999)+100000;
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(email);
        message.setSubject("Your community market code");
        message.setText("Your code is: "+code);
        try{mailSender.send(message);

            template.opsForValue().set(key,String.valueOf(code),3, TimeUnit.MINUTES);
            return true;} catch (MailException e){e.printStackTrace(); return false;}

    }
}