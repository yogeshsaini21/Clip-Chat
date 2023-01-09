package com.Application.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Application.Entities.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer>{

}
