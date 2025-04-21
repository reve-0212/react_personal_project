package com.example.react_blog_test_server.service;

import com.example.react_blog_test_server.dto.ReactBlogDTO;
import com.example.react_blog_test_server.dto.ReactCommentDTO;
import com.example.react_blog_test_server.mapper.BlogMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogServiceImpl implements BlogService {

  @Autowired
  private BlogMapper blogMapper;

  @Override
  public List<ReactBlogDTO> getAllBlogList() {
    return blogMapper.getAllBlogList();
  }

  @Override
  public ReactBlogDTO getPostById(int id) {
    return blogMapper.getPostById(id);
  }

  @Override
  public List<ReactCommentDTO> getAllCommentList(int id) {
    return blogMapper.getAllCommentList(id);
  }

  @Override
  public void writeBoard(String title, String contents) {
    blogMapper.writeBoard(title, contents);
  }

  @Override
  public void deletePostById(int id) {
    blogMapper.deletePostById(id);
  }

  @Override
  public void updatePostById(int id, String title, String contents) {
    blogMapper.updatePostById(id, title, contents);
  }

  @Override
  public void writeComment(int blogId, String title) {
    blogMapper.writeComment(blogId, title);
  }

  @Override
  public void deleteComment(int id) {
    blogMapper.deleteComment(id);
  }

  @Override
  public void updateComment(int id, String title) {
    blogMapper.updateComment(id, title);
  }
}
