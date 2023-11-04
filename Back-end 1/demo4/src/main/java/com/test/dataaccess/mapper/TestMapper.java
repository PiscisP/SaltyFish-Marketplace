package com.test.dataaccess.mapper;


import com.test.dataaccess.entity.TestEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TestMapper {

    @Select("SELECT * FROM customers;")
    List<TestEntity> selectAll();
}
