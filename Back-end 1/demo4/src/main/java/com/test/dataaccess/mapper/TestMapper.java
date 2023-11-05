package com.test.dataaccess.mapper;


import com.test.dataaccess.entity.TestEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface TestMapper {

    @Select("SELECT * FROM customers;")
    List<TestEntity> selectAll();

    @Select("SELECT * FROM customers WHERE customer_id = #{id}")
    List<TestEntity> selectByID(int id);

    @Update("UPDATE customers SET phone = #{phoneNum} WHERE customer_id = #{id}")
    void updateCustomerPhone(int id, String phoneNum);
}
