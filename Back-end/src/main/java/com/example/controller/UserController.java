package com.example.controller;

import com.example.entity.Account;
import com.example.entity.RestBean;
import com.example.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public RestBean<?> getUserProfile(HttpSession session) {
        Integer userId = (Integer) session.getAttribute("userId");
        if (userId == null) {
            return RestBean.failure(401, "Unauthorized");
        }
        Account account = userService.getUserProfile(userId);
        return RestBean.success(account);
    }

    @PostMapping("/update")
    public RestBean<?> updateUserProfile(@RequestBody Account account, HttpSession session) {
        Integer userId = (Integer) session.getAttribute("userId");
        if (userId == null) {
            return RestBean.failure(401, "Unauthorized");
        }
        userService.updateUserProfile(userId, account);
        return RestBean.success("Profile updated successfully");
    }
}
