package com.test.datatype;

import com.test.dataaccess.entity.AssetDO;
import com.test.dataaccess.mapper.AssetMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.awt.*;
import java.util.Date;
import java.util.List;

public class Item {
    private long id;
    private List<String> tags;
    private double price;
    private long upload_time;
    private String condition;
    private long seller_id;
    private Image picture;
    private String description;
    private List<String> liked_by;
    private List<String> disliked_by;

    @Autowired
    private static AssetMapper assetMapper;

    private boolean update_stock()
    {
        AssetDO item = assetMapper.selectAssetById(id);
        if (item == null) return false;
        if (item.getPurchase_time() != null) return false;
        item.setPurchase_time(new Date(System.currentTimeMillis()));
        assetMapper.updateAsset(item);
        return true;
    }

    /*
     * @return         returns true if the item is in stock, returns false otherwise
     */
    public boolean consume()
    {
        return update_stock();
    }

    /*
     * @param username the username of the user who liked this product
     */
    public void like(String username)
    {
        if (liked_by.contains(username)) return;
        disliked_by.remove(username);
        liked_by.add(username);
    }

    /*
     * @param username the username of the user who disliked this product
     */
    public void dislike(String username)
    {
        if (disliked_by.contains(username)) return;
        liked_by.remove(username);
        disliked_by.add(username);
    }

}
