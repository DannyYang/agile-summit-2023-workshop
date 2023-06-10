package com.webcomm.tw.svc.vote.cache;

import org.redisson.api.RBucket;
import org.redisson.api.RKeys;
import org.redisson.api.RedissonClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CacheService {

    @Autowired
    private RedissonClient redissonClient;

    public <T> Optional<T> getValue(CacheKey cacheKey, Class<T> c, String key) {
        try {
            RBucket<T> rbucket = redissonClient.getBucket(cacheKey.KEY + ":" + key);
            return Optional.ofNullable(rbucket.get());
        } catch (Exception ex) {
            throw new CacheException("Redis取資料發生錯誤", ex);
        }
    }

    public <T> void setValue(CacheKey cacheKey, String key, T value) {
        try {
            RBucket<T> rbucket = redissonClient.getBucket(cacheKey.KEY + ":" + key);
            rbucket.set(value, cacheKey.TIME_OUT, cacheKey.UNIT);
        } catch (Exception ex) {
            throw new CacheException("Redis存資料發生錯誤", ex);
        }
    }

    public <T> void delete(CacheKey cacheKey, String key) {
        try {
            RBucket<T> rbucket = redissonClient.getBucket(cacheKey.KEY + ":" + key);
            rbucket.delete();
        } catch (Exception ex) {
            throw new CacheException("Redis刪除資料發生錯誤", ex);
        }
    }

    public void clear(CacheKey cacheKey) {
        try {
            RKeys rkeys = redissonClient.getKeys();
            rkeys.deleteByPattern(cacheKey.KEY + ":*");
        } catch (Exception ex) {
            throw new CacheException("Redis清空資料發生錯誤", ex);
        }
    }

    public void clear(CacheKey cacheKey, String keyPrefix) {
        try {
            RKeys rkeys = redissonClient.getKeys();
            rkeys.deleteByPattern(cacheKey.KEY + ":" + keyPrefix + "*");
        } catch (Exception ex) {
            throw new CacheException("Redis清空資料發生錯誤", ex);
        }
    }
}
