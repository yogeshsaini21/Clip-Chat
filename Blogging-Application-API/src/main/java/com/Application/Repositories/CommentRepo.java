package com.Application.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Application.Entities.Comment;

public interface CommentRepo extends JpaRepository<Comment, Integer> {

}
