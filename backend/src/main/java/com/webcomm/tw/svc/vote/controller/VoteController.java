package com.webcomm.tw.svc.vote.controller;

import com.webcomm.tw.svc.vote.rest.RestResult;
import com.webcomm.tw.svc.vote.rest.RestStatus;
import com.webcomm.tw.svc.vote.vote.VoteException;
import com.webcomm.tw.svc.vote.vote.VoteParams;
import com.webcomm.tw.svc.vote.vote.VoteRecord;
import com.webcomm.tw.svc.vote.vote.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/vote")
public class VoteController {

    @Autowired
    private VoteService voteService;

    @GetMapping(path = "/params")
    public RestResult<VoteParams> getVoteParams() {
        return new RestResult<>(RestStatus.SUCCESS, voteService.getParams());
    }
    
    @GetMapping(path = "/records")
    public RestResult<List<VoteRecord>> getVoteRecords(@RequestParam String userId) {
        return new RestResult<>(RestStatus.SUCCESS, voteService.getRecords(userId));
    }

    @PostMapping(path = "")
    public RestResult<?> vote(@RequestBody VoteRecord voteRecord) throws VoteException {
        voteService.vote(voteRecord);
        return new RestResult<>(RestStatus.SUCCESS);
    }

    @GetMapping(path = "/result")
    public RestResult<?> getResult() {
        return new RestResult<>(RestStatus.SUCCESS, voteService.getResult());
    }
}
