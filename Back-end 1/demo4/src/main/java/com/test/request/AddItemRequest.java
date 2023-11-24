package com.test.request;

import java.util.Date;

public class AddItemRequest {
    private String tags;
    private double price;
    private String condition_;
    private int seller_id;
    private String picture;
    private String description;

    public String getTags() {
        return tags;
    }

    public double getPrice() {
        return price;
    }

    public String getCondition_() {
        return condition_;
    }

    public int getSeller_id() {
        return seller_id;
    }

    public String getPicture() {
        return picture;
    }

    public String getDescription() {
        return description;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setCondition_(String condition_) {
        this.condition_ = condition_;
    }

    public void setSeller_id(int seller_id) {
        this.seller_id = seller_id;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
