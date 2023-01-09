package com.Application.Controllers;



import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Application.Payloads.ApiResponse;
import com.Application.Payloads.UserDto;
import com.Application.Services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	// create user ------->
	
	@PostMapping("/")
	public ResponseEntity<UserDto> CreateUser(@Valid @RequestBody UserDto userDto ){
		UserDto createUserDto= this.userService.createUser(userDto);
		return new ResponseEntity<UserDto>(createUserDto, HttpStatus.CREATED);
	}
	
	// update user -------->
	
	@PutMapping("/{userID}")
	public ResponseEntity<UserDto> updateUser(@Valid @RequestBody UserDto userDto , @PathVariable Integer userID ){
		
		UserDto updateduser =  this.userService.updateUser(userDto, userID);
		return ResponseEntity.ok(updateduser);
	}
	
	//Delete user ------>
	
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/{userID}")
	public ResponseEntity<ApiResponse> deleteUser(@PathVariable Integer userID){
		 this.userService.deleteUser(userID);
		return new ResponseEntity(new ApiResponse("User Delete Successfully",true),HttpStatus.OK);
	}
	
	@GetMapping("/")
	public ResponseEntity<List<UserDto>> getAllUser(){
		return ResponseEntity.ok(this.userService.getAllUsers());
	}
	
	@GetMapping("/{userID}")
	public ResponseEntity<UserDto> getSingleUser(@PathVariable Integer userID){
		return ResponseEntity.ok(this.userService.getUserById(userID));
	}
	
	
}








