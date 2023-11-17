package com.test.dataaccess.entity;

import com.test.dataaccess.entity.AssetDO;
import com.test.dataaccess.mapper.AssetMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.awt.*;
import java.util.Date;
import java.util.List;

public class Item {
    private int pid;
    private String tags;
    private double price;
    private Date upload_time;
    private String condition_;
    private int seller_id;
    private byte[] picture;
    private String description;
    private List<String> liked_by;

    public void setPid(int pid) {
        this.pid = pid;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setUpload_time(Date upload_time) {
        this.upload_time = upload_time;
    }

    public void setCondition_(String condition_) {
        this.condition_ = condition_;
    }

    public void setSeller_id(int seller_id) {
        this.seller_id = seller_id;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPid() {
        return pid;
    }

    public String getTags() {
        return tags;
    }

    public double getPrice() {
        return price;
    }

    public Date getUpload_time() {
        return upload_time;
    }

    public String getCondition_() {
        return condition_;
    }

    public int getSeller_id() {
        return seller_id;
    }

    public byte[] getPicture() {
        return picture;
    }

    public String getDescription() {
        return description;
    }

    private List<String> disliked_by;




    @Autowired
    private static AssetMapper assetMapper;

    private boolean update_stock()
    {
        AssetDO item = assetMapper.selectAssetById((long)pid);
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
