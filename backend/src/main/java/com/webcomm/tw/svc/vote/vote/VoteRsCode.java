package com.webcomm.tw.svc.vote.vote;

public enum VoteRsCode {
    
    DUPLICATE_VOTE("V001", "不可重複投票");
    
    public final String CODE;
    public final String MESSAGE;
    
    VoteRsCode(String CODE, String MESSAGE){
        this.CODE = CODE;
        this.MESSAGE = MESSAGE;
    }
}
