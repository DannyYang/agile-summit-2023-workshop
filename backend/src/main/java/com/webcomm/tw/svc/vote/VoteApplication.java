package com.webcomm.tw.svc.vote;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class VoteApplication {
	public static void main(String[] args) {
		SpringApplication.run(VoteApplication.class, args);
	}
}
