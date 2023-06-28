package com.webcomm.tw.svc.vote.rest;

import java.io.Serializable;
import java.time.LocalDateTime;
public class RestResult<T> implements Serializable {

    private String status;

    private String message;
    
    private T data;

    private LocalDateTime time;

    public RestResult(String status, String message) {
        this.status = status;
        this.message = message;
    }

    public RestResult(RestStatus status, T data) {
        this.status = status.CODE;
        this.message = status.MESSAGE;
        this.data = data;
        this.time = LocalDateTime.now();
    }

    public RestResult(RestStatus status) {
        this.status = status.CODE;
        this.message = status.MESSAGE;
        this.time = LocalDateTime.now();
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
    public String getStatus() {
        return status;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    
    public String getMessage() {
        return message;
    }

    public void setData(T data) {
        this.data = data;
    }
    
    public T getData() {
        return data;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }
}
