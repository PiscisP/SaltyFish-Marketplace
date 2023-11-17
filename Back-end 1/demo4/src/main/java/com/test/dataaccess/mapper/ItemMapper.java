package com.test.dataaccess.mapper;


import com.test.dataaccess.entity.Item;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface ItemMapper {

    @Select("SELECT * FROM product;")
    List<Item> selectAll();

    @Select("SELECT * FROM product WHERE tag LIKE '%${filter}%';")
    List<Item> selectByFilter(String filter);

    @Select("SELECT * FROM product WHERE pid = #{id}")
    List<Item> selectByID(int id);
}
