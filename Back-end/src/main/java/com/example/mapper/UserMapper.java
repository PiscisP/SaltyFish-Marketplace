package com.example.mapper;

import com.example.entity.Account;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Insert;

@Mapper
public interface UserMapper {
    @Select("select * from db_account where username = #{text} or email= #{text}")
    Account FindAccountByNameOrEmail(String text);

    @Insert("insert into db_account (email,username,password) values (#{email}, #{username}, #{password})")
    int createAccount(String username,String password, String email);
}
