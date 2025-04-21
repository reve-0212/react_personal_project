package com.example.react_blog_test_server.controller;

import com.example.react_blog_test_server.dto.ReactBlogDTO;
import com.example.react_blog_test_server.dto.ReactCommentDTO;
import com.example.react_blog_test_server.service.BlogService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
public class Controller {

  @Autowired
  private BlogService blogService;

  @GetMapping("/")
  public List<ReactBlogDTO> getAllBlogList() {
    return blogService.getAllBlogList();
  }

  @GetMapping("/post/{id}")
  public ReactBlogDTO getPost(@PathVariable int id) {
    return blogService.getPostById(id);
  }

  @GetMapping("/comment/{id}")
  public List<ReactCommentDTO> getAllCommentList(@PathVariable int id) {
    return blogService.getAllCommentList(id);
  }

  @PutMapping("/write")
  public void writeBoard(@Param("title") String title, @Param("content") String contents) {
    blogService.writeBoard(title, contents);
  }

  @DeleteMapping("/delete/{id}")
  public void deleteBoard(@PathVariable int id) {
    blogService.deletePostById(id);
  }

  @PatchMapping("/update")
  public void updateBoard(@RequestBody ReactBlogDTO reactBlogDTO) {
    int id = reactBlogDTO.getId();
    String title = reactBlogDTO.getTitle();
    String contents = reactBlogDTO.getContents();
    blogService.updatePostById(id, title, contents);
  }

  @PutMapping("/writeComment")
  public void writeComment(@RequestBody ReactCommentDTO reactCommentDTO) {
    int blogId = reactCommentDTO.getBlogId();
    String title = reactCommentDTO.getTitle();
    blogService.writeComment(blogId, title);
  }

  @DeleteMapping("/deleteComment/{id}")
  public void deleteComment(@PathVariable int id) {
    blogService.deleteComment(id);
  }

  @PatchMapping("/updateComment")
  public void updateComment(@RequestBody ReactCommentDTO reactCommentDTO) {
    int id = reactCommentDTO.getId();
    String title = reactCommentDTO.getTitle();
    blogService.updateComment(id, title);
  }
}
