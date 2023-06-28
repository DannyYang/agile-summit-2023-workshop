package com.webcomm.tw.svc.vote.rest;

import com.webcomm.tw.svc.vote.vote.VoteException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class RestExceptionHandler {
    
    @ExceptionHandler
    public RestResult<Error> handleException(VoteException e) {
        return new RestResult<>(e.CODE, e.getLocalizedMessage());
    }
}
