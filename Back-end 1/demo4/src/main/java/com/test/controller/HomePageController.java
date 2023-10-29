package com.test.controller;

import com.test.base.Result;
import com.test.request.LoginRequest;
import com.test.response.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;


public class HomePageController {

    @GetMapping(value = "/home")
    public String home(@ModelAttribute LoginRequest payload , Model model) {
        model.addAttribute("message", "Hello World www.google.com");
        return "GetHomeSuccess";


    }


}

