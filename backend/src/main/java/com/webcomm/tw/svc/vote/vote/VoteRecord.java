package com.webcomm.tw.svc.vote.vote;

import java.io.Serializable;

public class VoteRecord implements Serializable {

    private final String userId;
    private final String optionId;
    
    public VoteRecord(String userId, String optionId) {
        this.userId = userId;
        this.optionId = optionId;
    }

    public String getUserId() {
        return userId;
    }

    public String getOptionId() {
        return optionId;
    }
}
