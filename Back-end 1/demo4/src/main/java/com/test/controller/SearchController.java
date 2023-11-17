package com.test.controller;

import com.test.dataaccess.entity.Item;
import com.test.dataaccess.mapper.ItemMapper;
import com.test.request.LoginRequest;
import com.test.request.SearchRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class SearchController {
    private static ItemMapper itemMapper;

    public SearchController(ItemMapper im)
    {
        itemMapper = im;
    }


    @GetMapping(value = "/api/search")
    public ResponseEntity<?> search(@ModelAttribute SearchRequest param , Model model) {
        List<Map<String, String>> result = new ArrayList<>();

        String []query = param.getQuery().split(" ");
        String []filter = param.getFilter().split(" ");

        List<Item> items;
        if (param.getFilter().isEmpty())
        {
            System.out.println("len = 0");
            items = itemMapper.selectAll();
        }
        else {
            items = new ArrayList<>();
            for (String kwd : filter)
            {
                System.out.println(kwd);
                items.addAll(itemMapper.selectByFilter(kwd));
            }
        }
        if (!param.getQuery().isEmpty())
        {
            for (int i = 0; i < items.size(); ++i) {
                boolean matches_query = false;
                for (String kwd : query) {
                    if (items.get(i).getDescription().contains(kwd)) {
                        matches_query = true;
                        break;
                    }
                }
                if (!matches_query)
                {
                    items.remove(i);
                    --i;
                }
            }
        }
        for (Item item : items)
        {
            Map<String, String> item_result = new HashMap<>();
            item_result.put("id", "" + item.getPid());
            item_result.put("description", item.getDescription());
            item_result.put("price", "" + item.getPrice());
            result.add(item_result);
        }


        return ResponseEntity.ok(result);
    }
}
