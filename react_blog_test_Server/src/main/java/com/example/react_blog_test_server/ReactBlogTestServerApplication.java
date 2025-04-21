package com.example.react_blog_test_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class ReactBlogTestServerApplication {

  public static void main(String[] args) {
    SpringApplication.run(ReactBlogTestServerApplication.class, args);
  }

}
