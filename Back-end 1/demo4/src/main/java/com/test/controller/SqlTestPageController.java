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

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;;
import java.util.HashMap;

@Controller
public class SqlTestPageController {

    private TestMapper testMapper;

    private HttpServletRequest request;

    public String getUserIP() {
        String ipAddress = request.getHeader("X-Forwarded-For");
        if (ipAddress == null || ipAddress.isEmpty() || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getRemoteAddr();
        }
        return ipAddress;
    }
    public SqlTestPageController(TestMapper tm, HttpServletRequest hsr){
        this.testMapper = tm;
        this.request = hsr;
    }
    @GetMapping(value = "/test")
    public String test(Model model) {
        String message = "";

        message += getUserIP();

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

        testMapper.updateCustomerPhone(2, "10086");
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

