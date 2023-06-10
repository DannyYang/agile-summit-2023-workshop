package com.webcomm.tw.svc.vote.cache;

import java.util.concurrent.TimeUnit;

public enum CacheKey {
    VOTE("vote", 6, TimeUnit.HOURS);

    public final String KEY;
    public final long TIME_OUT;
    public final TimeUnit UNIT;

    CacheKey(String KEY, long TIME_OUT, TimeUnit UNIT) {
        this.KEY = KEY;
        this.TIME_OUT = TIME_OUT;
        this.UNIT = UNIT;
    }

    @Override
    public String toString() {
        return KEY + ";" + TIME_OUT + ";" + UNIT;
    }
}

