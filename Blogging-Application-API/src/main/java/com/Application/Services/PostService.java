package com.Application.Services;

import java.util.List;

import com.Application.Entities.Post;
import com.Application.Payloads.PostDto;
import com.Application.Payloads.PostResponse;

public interface PostService {

	PostDto CreatePost(PostDto postDto, Integer userId, Integer categoryId);

	PostDto updatePost(PostDto postDto, Integer postId);

	void deletePost(Integer postId);

	PostResponse getAllPost(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

	PostDto getPostById(Integer postId);

	List<PostDto> getPostByCategory(Integer categoryId);

	List<PostDto> getPostsByUser(Integer userId);

	List<PostDto> searchPosts(String keyword);

}
