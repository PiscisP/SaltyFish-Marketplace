package com.test.dataaccess.mapper;


import com.test.dataaccess.entity.Item;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ItemMapper {

    @Select("SELECT * FROM product;")
    List<Item> selectAll();

    @Select("SELECT * FROM product WHERE tags LIKE '%${filter}%';")
    List<Item> selectByFilter(String filter);

    @Select("SELECT * FROM product WHERE pid = #{id}")
    List<Item> selectByID(int id);
    @Insert("INSERT INTO product (tags, price, upload_time, condition_, seller_id, picture, description) " +
            "VALUES (\"${tags}\", #{price}, #{upload_time}, \"${condition_}\", #{seller_id}, #{picture}, \"${description}\")")
    void insertItem(Item item);

}
