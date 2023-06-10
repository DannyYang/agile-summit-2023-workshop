package com.webcomm.tw.svc.vote.cache;

public class CacheException extends RuntimeException {
    /**
     * Constructor
     */
    public CacheException() {
        super();
    }


    public CacheException(Throwable cause) {
        super(cause);
    }

    /**
     * Constructor
     *
     * @param sMsg
     * @param cause
     */
    public CacheException(String sMsg, Throwable cause) {
        super(sMsg, cause);
    }

    /**
     * Constructor
     *
     * @param sMsg
     */
    public CacheException(String sMsg) {
        super(sMsg);
    }

    public String toString() {

        Throwable th = getCause();
        StringBuffer sb = new StringBuffer(super.toString());
        if (th != null) {
            sb.append(", caused = " + th);
        }

        return sb.toString();
    }
}
