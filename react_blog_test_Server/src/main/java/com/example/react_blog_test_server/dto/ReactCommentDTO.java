package com.example.react_blog_test_server.dto;

import lombok.Data;

@Data
public class ReactCommentDTO {
  private int id;
  private int blogId;
  private String title;
}
