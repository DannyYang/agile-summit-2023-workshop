package com.webcomm.tw.svc.vote.vote;

public class VoteOption {

    private String optionId;

    private String label;

    private String bgColor;
    
    public VoteOption() {}

    public void setOptionId(String optionId) {
        this.optionId = optionId;
    }
    
    public String getOptionId() {
        return optionId;
    }

    public void setLabel(String label) {
        this.label = label;
    }
    
    public String getLabel() {
        return label;
    }

    public void setBgColor(String bgColor) {
        this.bgColor = bgColor;
    }
    
    public String getBgColor() {
        return bgColor;
    }
}
