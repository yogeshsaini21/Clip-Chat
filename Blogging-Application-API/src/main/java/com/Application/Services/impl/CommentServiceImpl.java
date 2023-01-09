package com.Application.Services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Application.Entities.Comment;
import com.Application.Entities.Post;
import com.Application.Entities.User;
import com.Application.Exceptions.ResourceNotFoundException;
import com.Application.Payloads.CommentDto;
import com.Application.Repositories.CommentRepo;
import com.Application.Repositories.PostRepo;
import com.Application.Repositories.UserRepo;
import com.Application.Services.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private PostRepo postRepo;
	@Autowired
	private CommentRepo commentRepo;
	
	@Autowired
	private UserRepo userrepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public CommentDto createComment(CommentDto commentDto, Integer postId,Integer userId) {
		
		Post post = this.postRepo.findById(postId).orElseThrow(()-> new ResourceNotFoundException("Post", "post id", postId));
		User user = this.userrepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User", "user id", userId));
		Comment comment = this.modelMapper.map(commentDto, Comment.class);
		comment.setPost(post);
		comment.setUser(user);
		Comment savedComment = this.commentRepo.save(comment);
		
		
		return this.modelMapper.map(savedComment, CommentDto.class);
	}

	@Override
	public void deleteComment(Integer commentId) {
		Comment comment = this.commentRepo.findById(commentId).orElseThrow(()-> new ResourceNotFoundException("comment" , "comment id",commentId));
		this.commentRepo.delete(comment);
		
		
		
	}

}
