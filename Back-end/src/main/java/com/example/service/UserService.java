package com.example.service;

import com.example.entity.Account;
import com.example.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public Account getUserProfile(int userId) {
        // Fetch user profile from the database
        return userMapper.findAccountById(userId);
    }

    public void updateUserProfile(int userId, Account account) {
        // Update user profile in the database
        account.setId(userId);
        userMapper.updateAccount(account);
    }
}
