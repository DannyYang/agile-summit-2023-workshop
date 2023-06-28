package com.webcomm.tw.svc.vote.vote;

import com.webcomm.tw.svc.vote.cache.CacheKey;
import com.webcomm.tw.svc.vote.cache.CacheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VoteService {
    
    private static final String RECORDS = "records";

    @Autowired 
    private VoteParams voteParams;
    @Autowired
    private CacheService cacheService;
    @Value("${vote.canDuplicate:true}")
    private boolean canDuplicate;
    
    public VoteParams getParams() {
        return voteParams;
    }

    @SuppressWarnings("unchecked")
    public List<VoteRecord> getRecords() {
        return cacheService.getValue(CacheKey.VOTE, List.class, RECORDS)
                .orElseGet(ArrayList::new);
    }
    
    public List<VoteRecord> getRecords(String userId) {
        return getRecords()
                .stream()
                .filter(record -> userId.equals(record.getUserId()))
                .collect(Collectors.toList());
    }

    public void vote(VoteRecord record) throws VoteException {
        List<VoteRecord> records = getRecords();
        boolean hasVote = records
                .stream()
                .anyMatch(l -> l.getUserId().equals(record.getUserId()));
        if(!canDuplicate && hasVote){
            throw new VoteException(VoteRsCode.DUPLICATE_VOTE);
        }
        records.add(record);
        cacheService.setValue(CacheKey.VOTE, RECORDS, records);
    }

    public List<VoteResult> getResult() {
        List<VoteRecord> records = getRecords();
        List<VoteResult> result = new ArrayList<>();
        for(VoteOption option : getParams().getOptions()){
            long count = records
                    .stream()
                    .filter(record -> option.getOptionId().equals(record.getOptionId()))
                    .count();
            result.add(new VoteResult(option.getOptionId(), count));
        }
        return result;
    }
}