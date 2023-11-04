package com.test.controller;

import com.test.base.Result;
import com.test.dataaccess.entity.AssetDO;
import com.test.dataaccess.entity.TestEntity;
import com.test.dataaccess.mapper.AssetMapper;
import com.test.dataaccess.mapper.TestMapper;
import com.test.request.LoginRequest;
import com.test.response.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class HomePageController {

    private TestMapper testMapper;

    public HomePageController(TestMapper tm){
        this.testMapper = tm;
    }
    @GetMapping(value = "/home")
    public String home(@ModelAttribute LoginRequest payload , Model model) {
        String message = "";
        model.addAttribute("message", "Hello World www.google.com");
        List<TestEntity> customers = testMapper.selectAll();
        for (TestEntity te : customers){
            message += te.getFirst_name() + " ";
            message += te.getLast_name() + "\r\n";
        }

        model.addAttribute("message", message);
        return "GetHomeSuccess";


    }


}

