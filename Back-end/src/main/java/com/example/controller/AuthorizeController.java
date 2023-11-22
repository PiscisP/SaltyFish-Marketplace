package com.example.controller;

import com.example.entity.RestBean;
import com.example.service.AuthorizeService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Struct;

@Validated
@RestController
@RequestMapping("/api/auth")
public class AuthorizeController {

    private final String EMAIL_REGEX = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
    private final String USERNAME_REGEX = "^[a-zA-Z0-9一-龥]+$";

    @Resource
    AuthorizeService service;

    @PostMapping("/valid-email")
    public RestBean<String> validateEmail(@Pattern(regexp = EMAIL_REGEX) @RequestParam("email") String email,HttpSession session){
        

        String confirm = service.sendValidateEmail(email,session.getId());
        if (confirm == null)
            return RestBean.success("Email Sent");
        else
            return RestBean.failure(400, confirm);
    }
    @PostMapping("/register")
    public RestBean<String> registerUser(@Pattern(regexp = USERNAME_REGEX) @Length(min=2, max=8)
                                             @RequestParam("username")String username,
                                         @Length(min=6, max=16) @RequestParam("password")String password,
                                         @Pattern(regexp = EMAIL_REGEX )@RequestParam("email") String email,
                                         @RequestParam("code") String code,
                                         HttpSession session){
        String s = service.validateAndRegister(username,password,email,code,session.getId());
        if(s==null){
            return RestBean.success("Register Succeed");
        }else{
            return RestBean.failure(400,"Register Fail, Code wrong");
        }
    }



}
