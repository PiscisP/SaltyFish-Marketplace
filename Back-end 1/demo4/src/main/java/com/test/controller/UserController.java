package com.test.controller;

import com.test.dataaccess.entity.UserDO;
import com.test.dataaccess.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserMapper userMapper;

    @Autowired
    public UserController(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @PostMapping("/add")
    public ResponseEntity<String> addUser(@RequestBody UserDO user) {
        userMapper.addUser(user);
        return ResponseEntity.ok("User added successfully");
    }

    @GetMapping("/{u_id}")
    public ResponseEntity<UserDO> getUserById(@PathVariable String u_id) {
        UserDO user = userMapper.getUserById(u_id);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateUser(@RequestBody UserDO user) {
        userMapper.updateUser(user);
        return ResponseEntity.ok("User updated successfully");
    }
}