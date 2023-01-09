package com.Application.Services.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Application.Entities.Role;
import com.Application.Entities.User;
import com.Application.Exceptions.ResourceNotFoundException;
import com.Application.Payloads.UserDto;
import com.Application.Repositories.RoleRepo;
import com.Application.Repositories.UserRepo;
import com.Application.Services.UserService;
import com.Application.config.AppConstants;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private RoleRepo roleRepo;
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public UserDto createUser(UserDto userDto) {
		
		User user = this.dtoToUser(userDto);
		User savedUser = this.userRepo.save(user);
		return this.userToDto(savedUser);
	}

	@Override
	public UserDto updateUser(UserDto userDto, Integer userId) {
		
		User user = this.userRepo.findById(userId)
				.orElseThrow(()-> new ResourceNotFoundException("User","id",userId));
		
		user.setName(userDto.getName());
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		user.setAbout(userDto.getAbout());
		
		User updatedUser = this.userRepo.save(user);
		
		UserDto userDto1= this.userToDto(updatedUser);
		
		
		return userDto1;
	}

	@Override
	public UserDto getUserById(Integer userId) {
		
		User user = this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","Id",userId));
		
		return this.userToDto(user);
	}

	@Override
	public List<UserDto> getAllUsers() {
		
		List<User> users= this.userRepo.findAll();
		
		List<UserDto> UserDtos=  users.stream().map(user-> this.userToDto(user)).collect(Collectors.toList());		
		return UserDtos;
	}

	@Override
	public void deleteUser(Integer userID) {
		
		User user = this.userRepo.findById(userID).orElseThrow(()->new ResourceNotFoundException("User","Id",userID));
		this.userRepo.delete(user);
		
		
	}
	
	public User dtoToUser(UserDto userDto) {
//		User user = this.modelMapper.map(userDto, User.class);
		
		User user = new User();
		//here I use modelmapper class in the place of manually implementation
		
		user.setId(userDto.getId());
		user.setName(userDto.getName());
		user.setEmail(userDto.getEmail());
		user.setAbout(userDto.getAbout());
		user.setPassword(userDto.getPassword());
		return user;
		
		
	}
	
	public UserDto userToDto(User user) {
//		UserDto userDto = this.modelMapper.map(user, UserDto.class);

		UserDto userDto = new UserDto();
				userDto.setId(user.getId());
		userDto.setName(user.getName());
		userDto.setEmail(user.getEmail());
		userDto.setPassword(user.getPassword());
		userDto.setAbout(user.getAbout());
		
		return userDto;
		
		
		
	}

	@Override
	public UserDto registerNewUser(UserDto userDto) {
		User user = this.modelMapper.map(userDto, User.class);
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		Role role = this.roleRepo.findById(AppConstants.NORMAL_USER).get();
		user.getRoles().add(role);
		User newUser = this.userRepo.save(user);
		
		
		return this.modelMapper.map(newUser, UserDto.class);
	}

}


















