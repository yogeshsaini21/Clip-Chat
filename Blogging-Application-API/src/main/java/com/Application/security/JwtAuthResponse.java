package com.Application.security;

import com.Application.Payloads.UserDto;

import lombok.Data;

@Data
public class JwtAuthResponse {

	private String token;
	private UserDto user;
}
