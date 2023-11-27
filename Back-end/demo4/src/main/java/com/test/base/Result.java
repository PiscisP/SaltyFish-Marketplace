package com.test.base;

/**
 * User : LiuKe
 * Date : 2016/11/10
 * Time : 17:21
 */



import java.io.Serializable;

/**
 * 返回结果
 *
 * @author liuke
 */

public class Result<T> implements Serializable {

    private static final long serialVersionUID = 1998428067166208629L;

    /**
     * 结果码
     */
    private String code;

    /**
     * 描述
     */
    private String message;

    /**
     * 是否成功
     */
    private Boolean success;
    /**
     * 自定义属性
     */
    private T data;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Result(String code, String message) {
        this.code = code;
        this.message = message;
    }
    public Result(String code, String message , Boolean success) {
        this.code = code;
        this.message = message;
        this.success = success;
    }
    public Result(String code, String message, String systemSuccessCode) {
        this.code = code;
        this.message = message;
        if ("".equals(systemSuccessCode)) {
            this.success = code.equals(systemSuccessCode) ? true : false;
        }
    }

    public Result() {

    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }


}