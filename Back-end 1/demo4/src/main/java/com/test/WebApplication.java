package com.test;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.boot.builder.SpringApplicationBuilder;



@SpringBootApplication
@ComponentScan(basePackages = {"com.test"})
@MapperScan(basePackages={"com.test.dataaccess.mapper"})

public abstract class WebApplication extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application){
        return application.sources(WebApplication.class);
    }
    public static void main(String[] args) {

        SpringApplication.run(WebApplication.class, args);
    }

}
