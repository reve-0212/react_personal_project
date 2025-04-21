package com.example.react_blog_test_server.mapper;

import com.example.react_blog_test_server.dto.ReactBlogDTO;
import com.example.react_blog_test_server.dto.ReactCommentDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BlogMapper {
  List<ReactBlogDTO> getAllBlogList();

  ReactBlogDTO getPostById(int id);

  List<ReactCommentDTO> getAllCommentList(int id);

  void writeBoard(String title, String contents);

  void deletePostById(int id);

  void updatePostById(int id, @Param("title") String title, @Param("contents") String contents);

  void writeComment(int blogId, String title);

  void deleteComment(int id);

  void updateComment(int id, String title);
}
