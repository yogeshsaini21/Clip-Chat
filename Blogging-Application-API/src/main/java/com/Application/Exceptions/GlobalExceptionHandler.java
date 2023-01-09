package com.Application.Exceptions;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.Application.Payloads.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<ApiResponse> resourceNotFoundException(ResourceNotFoundException ex) {
		String message = ex.getMessage();
		ApiResponse apiResponce = new ApiResponse(message, false);

		return new ResponseEntity<ApiResponse>(apiResponce, HttpStatus.NOT_FOUND);
	}
	
	
	@ExceptionHandler(ApiException.class)
	public ResponseEntity<ApiResponse> HandleApiException(ApiException ex) {
		String message = ex.getMessage();
		ApiResponse apiResponce = new ApiResponse(message, true);

		return new ResponseEntity<ApiResponse>(apiResponce, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Map<String, String>> handleBindException(MethodArgumentNotValidException ex){
		Map<String, String> resp = new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach((error)->{
			String fieldName = ((FieldError)error).getField();
			String message = error.getDefaultMessage();
			resp.put(fieldName, message);
		});
		
		return new ResponseEntity<Map<String,String>>(resp , HttpStatus.BAD_REQUEST);
	}
	
	 
//	@ExceptionHandler(MethodArgumentNotValidException.class)
//	public ResponseEntity<MyErrorDetails> myMANVExceptionHandler(MethodArgumentNotValidException me) {
//		MyErrorDetails err = new MyErrorDetails(LocalDateTime.now(), "Validation Error",me.getBindingResult().getFieldError().getDefaultMessage());
//		return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
//	}

}
