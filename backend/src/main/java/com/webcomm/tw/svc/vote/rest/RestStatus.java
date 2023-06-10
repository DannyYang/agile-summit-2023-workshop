package com.webcomm.tw.svc.vote.rest;

public enum RestStatus {

    SUCCESS("200", "OK");

    public final String CODE;
    public final String MESSAGE;

    RestStatus(String CODE, String MESSAGE) {
        this.CODE = CODE;
        this.MESSAGE = MESSAGE;
    }
}
