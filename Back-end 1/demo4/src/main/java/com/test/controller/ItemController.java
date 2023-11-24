package com.test.controller;

import com.test.dataaccess.entity.Item;
import com.test.dataaccess.mapper.ItemMapper;
import com.test.request.AddItemRequest;
import com.test.request.LoginRequest;
import com.test.request.SearchRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class ItemController {
    private static ItemMapper itemMapper;

    public ItemController(ItemMapper im)
    {
        itemMapper = im;
    }

    @PostMapping(value = "/api/item/add")
    public Map<String, String> add(@ModelAttribute AddItemRequest param, Model model)
    {
        Map<String, String> result = new HashMap<>();
        Item item = new Item();
        item.setCondition_(param.getCondition_());
        item.setDescription(param.getDescription());
        item.setTags(param.getTags());
        if (param.getPicture() != null) {
            item.setPicture(param.getPicture().getBytes());
        }
        item.setPrice(param.getPrice());
        item.setSeller_id(param.getSeller_id());
        item.setUpload_time(new Date(System.currentTimeMillis()));
        itemMapper.insertItem(item);

        result.put("message", "ok");
        return result;
    }

    @PostMapping(value = "/api/item/purchase")
    public Map<String, String> purchase()
    {
        return null;
    }

    @DeleteMapping(value = "/api/item/remove")
    public ResponseEntity<?> remove()
    {
        return null;
    }

    @GetMapping(value = "/api/item/search")
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
            Map<String, String> item_result = getStringStringMap(item);
            result.add(item_result);
        }


        return ResponseEntity.ok(result);
    }

    private static Map<String, String> getStringStringMap(Item item) {
        Map<String, String> item_result = new HashMap<>();
        int pid = item.getPid();
        String description = item.getDescription();
        double price = item.getPrice();
        Date upload_date = item.getUpload_time();
        String condition = item.getCondition_();
        byte[] picture = item.getPicture();
        int seller_id = item.getSeller_id();
        String tags = item.getTags();

        item_result.put("id", "" + pid);
        if (description != null) item_result.put("description", description);
        item_result.put("price", "" + price);
        if (upload_date != null) item_result.put("upload_date", upload_date.toString());
        if (condition != null) item_result.put("condition", condition);
        if (picture != null) item_result.put("picture", new String(picture));
        item_result.put("seller_id", "" + seller_id);
        if (tags != null) item_result.put("tags", tags);
        return item_result;
    }
}
