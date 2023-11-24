package com.test.service.impl;

import com.test.dataaccess.entity.UserDO;
import com.test.dataaccess.mapper.UserMapper;
import com.test.service.AuthorizeService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.userdetails.User;
import  org.springframework.security.core.userdetails.UserDetails;
import  org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        if(username == null)
            throw new UsernameNotFoundException("Username cant be empty");
        UserDO user = mapper.FindAccountByNameOrEmail(username);
        if(user == null)
            throw new UsernameNotFoundException("Wrong Username or Password");
        return  User
                .withUsername((user.getUsername()))
                .password((user.getPassword()))
                .roles("user")
                .build();
    }
    public String sendValidateEmail(String email, String sessionId){
        String key = "email:" + sessionId + ":"+ email;
        if(Boolean.TRUE.equals(template.hasKey(key)))
        {
            Long expire = Optional.ofNullable(template.getExpire(key,TimeUnit.SECONDS)).orElse(0L);
            if(expire>120)
                return "Request too fast, try again later";
        }
        if(mapper.FindAccountByNameOrEmail(email)!=null)
        {
            return "The email has been registered";
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
            return null;
        } catch (MailException e){e.printStackTrace(); return "Failed to send email, check the email";}

    }
    public String validateAndRegister(String username, String password, String email, String code,String sessionId) {
        String key = "email:" + sessionId + ":" + email;
        if (Boolean.TRUE.equals(template.hasKey(key))) {
            String s= template.opsForValue().get(key);
            if (s==null) return "Code expire, send request again";
            if(s.equals(code)){
                password = encoder.encode(password);
                if(mapper.createAccount(username,password,email)>0){
                    return null;
                }
                else{
                    return "Register Internal Error, please contact Administrator";
                }
            }else {
                return "Wrong code, please check again";
            }
        } else {
            return "Please send code first";
        }
    }
}