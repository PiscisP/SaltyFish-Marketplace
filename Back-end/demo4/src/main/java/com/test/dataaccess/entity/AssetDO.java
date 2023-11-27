package com.test.dataaccess.entity;

import java.io.Serializable;
import java.util.Date;

public class AssetDO implements Serializable {

    private Long id;
    private Long merchantId;
    private Long asset_category_id;
    private Long manager_user_id;
    private Long place_id;
    private Long belong_company_id;
    private Long use_company_id;
    private Long employee_id;
    private Long asset_image_id;
    private String asset_name;
    private String asset_code;
    private String brand;
    private String model;
    private String year_limit;
    private Float amount;
    private String supplier_name;
    private String out_order_no;
    private String unit;
    private Date purchase_time;
    private Date last_claim_time;
    private Long add_asset_type;
    private Long use_status;
    private Long asset_status;
    private String asset_sequence_no;
    private String extend_info;
    private Long data_status;
    private String remark;
    private Long version;
    private Date create_time;
    private Long create_user;
    private Date update_time;
    private Long update_user;
    private Date expected_return_time;
    private Long department_id;
    private Long asset_data_type;
    private Float rent_amount;
    private Long erp_in_order_product_id;
    private Long asset_in_storage_type;
    private Long use_type;
    private String supplier_contact_person;
    private String supplier_contact_details;
    private Date maintenance_expiration_time;
    private String maintenance_instructions;
    private Long quote_order_id;
    private Long quote_order_type;
    private Float residual_rate;
    private Long install_residual;
    private Date recorded_time;
    private String stable_key;
    private String third_asset_id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getMerchantId() {
        return merchantId;
    }

    public void setMerchantId(Long merchantId) {
        this.merchantId = merchantId;
    }

    public Long getAsset_category_id() {
        return asset_category_id;
    }

    public void setAsset_category_id(Long asset_category_id) {
        this.asset_category_id = asset_category_id;
    }

    public Long getManager_user_id() {
        return manager_user_id;
    }

    public void setManager_user_id(Long manager_user_id) {
        this.manager_user_id = manager_user_id;
    }

    public Long getPlace_id() {
        return place_id;
    }

    public void setPlace_id(Long place_id) {
        this.place_id = place_id;
    }

    public Long getBelong_company_id() {
        return belong_company_id;
    }

    public void setBelong_company_id(Long belong_company_id) {
        this.belong_company_id = belong_company_id;
    }

    public Long getUse_company_id() {
        return use_company_id;
    }

    public void setUse_company_id(Long use_company_id) {
        this.use_company_id = use_company_id;
    }

    public Long getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(Long employee_id) {
        this.employee_id = employee_id;
    }

    public Long getAsset_image_id() {
        return asset_image_id;
    }

    public void setAsset_image_id(Long asset_image_id) {
        this.asset_image_id = asset_image_id;
    }

    public String getAsset_name() {
        return asset_name;
    }

    public void setAsset_name(String asset_name) {
        this.asset_name = asset_name;
    }

    public String getAsset_code() {
        return asset_code;
    }

    public void setAsset_code(String asset_code) {
        this.asset_code = asset_code;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getYear_limit() {
        return year_limit;
    }

    public void setYear_limit(String year_limit) {
        this.year_limit = year_limit;
    }

    public Float getAmount() {
        return amount;
    }

    public void setAmount(Float amount) {
        this.amount = amount;
    }

    public String getSupplier_name() {
        return supplier_name;
    }

    public void setSupplier_name(String supplier_name) {
        this.supplier_name = supplier_name;
    }

    public String getOut_order_no() {
        return out_order_no;
    }

    public void setOut_order_no(String out_order_no) {
        this.out_order_no = out_order_no;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Date getPurchase_time() {
        return purchase_time;
    }

    public void setPurchase_time(Date purchase_time) {
        this.purchase_time = purchase_time;
    }

    public Date getLast_claim_time() {
        return last_claim_time;
    }

    public void setLast_claim_time(Date last_claim_time) {
        this.last_claim_time = last_claim_time;
    }

    public Long getAdd_asset_type() {
        return add_asset_type;
    }

    public void setAdd_asset_type(Long add_asset_type) {
        this.add_asset_type = add_asset_type;
    }

    public Long getUse_status() {
        return use_status;
    }

    public void setUse_status(Long use_status) {
        this.use_status = use_status;
    }

    public Long getAsset_status() {
        return asset_status;
    }

    public void setAsset_status(Long asset_status) {
        this.asset_status = asset_status;
    }

    public String getAsset_sequence_no() {
        return asset_sequence_no;
    }

    public void setAsset_sequence_no(String asset_sequence_no) {
        this.asset_sequence_no = asset_sequence_no;
    }

    public String getExtend_info() {
        return extend_info;
    }

    public void setExtend_info(String extend_info) {
        this.extend_info = extend_info;
    }

    public Long getData_status() {
        return data_status;
    }

    public void setData_status(Long data_status) {
        this.data_status = data_status;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    public Date getCreate_time() {
        return create_time;
    }

    public void setCreate_time(Date create_time) {
        this.create_time = create_time;
    }

    public Long getCreate_user() {
        return create_user;
    }

    public void setCreate_user(Long create_user) {
        this.create_user = create_user;
    }

    public Date getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(Date update_time) {
        this.update_time = update_time;
    }

    public Long getUpdate_user() {
        return update_user;
    }

    public void setUpdate_user(Long update_user) {
        this.update_user = update_user;
    }

    public Date getExpected_return_time() {
        return expected_return_time;
    }

    public void setExpected_return_time(Date expected_return_time) {
        this.expected_return_time = expected_return_time;
    }

    public Long getDepartment_id() {
        return department_id;
    }

    public void setDepartment_id(Long department_id) {
        this.department_id = department_id;
    }

    public Long getAsset_data_type() {
        return asset_data_type;
    }

    public void setAsset_data_type(Long asset_data_type) {
        this.asset_data_type = asset_data_type;
    }

    public Float getRent_amount() {
        return rent_amount;
    }

    public void setRent_amount(Float rent_amount) {
        this.rent_amount = rent_amount;
    }

    public Long getErp_in_order_product_id() {
        return erp_in_order_product_id;
    }

    public void setErp_in_order_product_id(Long erp_in_order_product_id) {
        this.erp_in_order_product_id = erp_in_order_product_id;
    }

    public Long getAsset_in_storage_type() {
        return asset_in_storage_type;
    }

    public void setAsset_in_storage_type(Long asset_in_storage_type) {
        this.asset_in_storage_type = asset_in_storage_type;
    }

    public Long getUse_type() {
        return use_type;
    }

    public void setUse_type(Long use_type) {
        this.use_type = use_type;
    }

    public String getSupplier_contact_person() {
        return supplier_contact_person;
    }

    public void setSupplier_contact_person(String supplier_contact_person) {
        this.supplier_contact_person = supplier_contact_person;
    }

    public String getSupplier_contact_details() {
        return supplier_contact_details;
    }

    public void setSupplier_contact_details(String supplier_contact_details) {
        this.supplier_contact_details = supplier_contact_details;
    }

    public Date getMaintenance_expiration_time() {
        return maintenance_expiration_time;
    }

    public void setMaintenance_expiration_time(Date maintenance_expiration_time) {
        this.maintenance_expiration_time = maintenance_expiration_time;
    }

    public String getMaintenance_instructions() {
        return maintenance_instructions;
    }

    public void setMaintenance_instructions(String maintenance_instructions) {
        this.maintenance_instructions = maintenance_instructions;
    }

    public Long getQuote_order_id() {
        return quote_order_id;
    }

    public void setQuote_order_id(Long quote_order_id) {
        this.quote_order_id = quote_order_id;
    }

    public Long getQuote_order_type() {
        return quote_order_type;
    }

    public void setQuote_order_type(Long quote_order_type) {
        this.quote_order_type = quote_order_type;
    }

    public Float getResidual_rate() {
        return residual_rate;
    }

    public void setResidual_rate(Float residual_rate) {
        this.residual_rate = residual_rate;
    }

    public Long getInstall_residual() {
        return install_residual;
    }

    public void setInstall_residual(Long install_residual) {
        this.install_residual = install_residual;
    }

    public Date getRecorded_time() {
        return recorded_time;
    }

    public void setRecorded_time(Date recorded_time) {
        this.recorded_time = recorded_time;
    }

    public String getStable_key() {
        return stable_key;
    }

    public void setStable_key(String stable_key) {
        this.stable_key = stable_key;
    }

    public String getThird_asset_id() {
        return third_asset_id;
    }

    public void setThird_asset_id(String third_asset_id) {
        this.third_asset_id = third_asset_id;
    }
}
