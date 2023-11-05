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
public class SqlTestPageController {

    private TestMapper testMapper;

    public SqlTestPageController(TestMapper tm){
        this.testMapper = tm;
    }
    @GetMapping(value = "/test")
    public String test(@ModelAttribute LoginRequest payload , Model model) {
        String message = "";

        List<TestEntity> customers = testMapper.selectAll();
        for (TestEntity te : customers){
            message += te.getFirst_name() + " ";
            message += te.getLast_name() + "\r\n";
        }

        model.addAttribute("get_all", message);
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        message = "";

        customers =testMapper.selectByID(2);
        for (TestEntity te : customers){
            message += te.getFirst_name() + " ";
            message += te.getLast_name() + " ";
            message += te.getPhone();
        }

        model.addAttribute("get_by_id", message);
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        message = "";

        testMapper.updateCustomerPhone(2, "425 123 4567");
        customers =testMapper.selectByID(2);
        for (TestEntity te : customers){
            message += te.getFirst_name() + " ";
            message += te.getLast_name() + " ";
            message += te.getPhone();
        }

        model.addAttribute("after_update", message);

        return "GetHomeSuccess";


    }


}

