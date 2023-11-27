
package com.test.dataaccess.mapper;
import com.test.dataaccess.entity.UserDO;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserMapper {

    @Insert("INSERT INTO users (u_id, username, email, phone_num, address, scu_id, password, first_name, last_name) " +
            "VALUES (#{u_id}, #{username}, #{email}, #{phone_num}, #{address}, #{scu_id}, #{password}, #{first_name}, #{last_name})")
    void addUser(UserDO user);


    @Select("SELECT * FROM users WHERE u_id = #{u_id}")
    UserDO getUserById(String u_id);

    @Update("UPDATE users SET username = #{username}, email = #{email}, phone_num = #{phone_num}, address = #{address}, " +
            "scu_id = #{scu_id}, password = #{password}, first_name = #{first_name}, last_name = #{last_name} " +
            "WHERE u_id = #{u_id}")
    void updateUser(UserDO user);

    @Select("select * from user where username = #{text} or email= #{text}")
    UserDO FindAccountByNameOrEmail(String text);

    @Insert("insert into user (email,username,password) values (#{email}, #{username}, #{password})")
    int createAccount(String username,String password, String email);
}