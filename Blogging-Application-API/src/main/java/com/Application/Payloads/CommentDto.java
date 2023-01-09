package com.Application.Payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CommentDto {

	private Integer Id;
	
	private String content;
	
	private Integer userId;
}
