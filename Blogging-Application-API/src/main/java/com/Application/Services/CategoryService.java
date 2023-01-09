package com.Application.Services;

import java.util.List;

import com.Application.Payloads.CategoryDto;

public interface CategoryService {

	CategoryDto createCategory(CategoryDto categoryDto);
	
	CategoryDto updateCategory(CategoryDto categoryDto,Integer categoryId);
	
	public void deleteCategory(Integer categoryId );
	
	public CategoryDto getCategory(Integer categoryId);
	
	List<CategoryDto> getCategories();
}
