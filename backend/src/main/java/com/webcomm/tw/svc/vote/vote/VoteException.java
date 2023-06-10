package com.webcomm.tw.svc.vote.vote;

public class VoteException extends Exception {

    public final String CODE;
    
    public VoteException(VoteRsCode voteRsCode) {
        super(voteRsCode.MESSAGE, null);
        this.CODE = voteRsCode.CODE;
    }
}
