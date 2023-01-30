package com.Application.Payloads;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.Application.Entities.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {

	private int id;
	
//	@NotNull
	@NotEmpty
	@Size(min=4 , message = "Username must be min of 4 characters !!")
	private String name;
	
	@NotEmpty(message="Email is required !!")
	@Email(message="Email address is not valid")
	private String email;
	
//	@NotNull
	@NotEmpty
	@Size(min=3 , max =8 , message = "password must be min of 3 chars and max of 8 chars !!")
//	@Pattern/(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$")
	private String password;
	
//	It contains at least 8 characters and at most 20 characters.
//	It contains at least one digit.
//	It contains at least one upper case alphabet.
//	It contains at least one lower case alphabet.
//	It contains at least one special character which includes !@#$%&*()-+=^.
//	It doesn’t contain any white space.
	
//	@NotNull
	@NotEmpty(message="about is required")
	private String about;
	 
	private Set<RoleDto> roles = new HashSet<>();
	
	@JsonIgnore
	public String getPassword() {
		return this.password;
	}

}
