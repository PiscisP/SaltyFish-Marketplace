package com.test.controller;

import com.test.base.Result;
import com.test.request.LoginRequest;
import com.test.response.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Controller("/")
public class LoginController {

    @GetMapping(value = "/login")
    public String login(@ModelAttribute LoginRequest payload , Model model) {
        if ("chenjiewen".equals(payload.getUsername()) && "admin".equals(payload.getPassword())) {
            User user1 = new User();
            user1.setAge(20);
            user1.setName("Jiewen");
            user1.setUsername(payload.getUsername());

            Result<User> result = new Result<>();
            result.setData(user1);
            result.setCode("OK");
            model.addAttribute("message", "Hello World");
            model.addAttribute("result", result);
            return "LoginSuccess";

        } else {
            model.addAttribute("message", "Unauthorized");
            return "LoginFailed";
        }
    }
}

