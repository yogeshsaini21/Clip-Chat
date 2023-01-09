package com.Application.Services;

import com.Application.Payloads.CommentDto;

public interface CommentService {
	
	CommentDto createComment(CommentDto commentDto , Integer postId,Integer userId);
	
	void deleteComment(Integer commentId);
	
}
