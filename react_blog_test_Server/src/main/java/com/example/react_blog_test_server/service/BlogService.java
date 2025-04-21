package com.example.react_blog_test_server.service;

import com.example.react_blog_test_server.dto.ReactBlogDTO;
import com.example.react_blog_test_server.dto.ReactCommentDTO;

import java.util.List;

public interface BlogService {
  List<ReactBlogDTO> getAllBlogList();

  ReactBlogDTO getPostById(int id);

  List<ReactCommentDTO> getAllCommentList(int id);

  void writeBoard(String title, String contents);

  void deletePostById(int id);

  void updatePostById(int id, String title, String  contents);

  void writeComment(int blogId, String title);

  void deleteComment(int id);

  void updateComment(int id, String title);
}
