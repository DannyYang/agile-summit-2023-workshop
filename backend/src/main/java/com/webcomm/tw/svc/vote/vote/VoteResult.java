package com.webcomm.tw.svc.vote.vote;

import java.io.Serializable;

public class VoteResult implements Serializable  {

    private final String optionId;
    private final long count;


    public VoteResult(String optionId, long count) {
        this.optionId = optionId;
        this.count = count;
    }

    public String getOptionId() {
        return optionId;
    }

    public long getCount() {
        return count;
    }
}
