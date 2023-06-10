package com.webcomm.tw.svc.vote.vote;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@ConfigurationProperties(prefix = "vote")
public class VoteParams {

    private String question;

    private List<VoteOption> options;

    public void setQuestion(String question) {
        this.question = question;
    }
    
    public String getQuestion() { 
        return question; 
    }

    public void setOptions(List<VoteOption> options) {
        this.options = options;
    }
    
    public List<VoteOption> getOptions() {
        return options;
    }
}
