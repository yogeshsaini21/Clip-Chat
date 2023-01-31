import Base from "../component/Base";
import React, { useState } from 'react';
import {Row,Col,Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast } from "react-toastify";
import {loginUser} from "../services/user-service"
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";


const Login=()=>{

  const [loginDetail , SetLoginDetail]=useState({
    username:'',
    password:''
  })

  const navigate =useNavigate();

  const handleChange=(event,field)=>{
      let actualValue =event.target.value ;
      SetLoginDetail({
        ...loginDetail , 
        [field]:actualValue
      }) 
  }


  const handleFormSubmit=(event)=>{
      event.preventDefault();
      console.log(loginDetail);

      if(loginDetail.username.trim()==='' || loginDetail.password.trim()===''){
        toast.error("Username or Password is required !!")
        return
      }

       // Submit the data to server to generate token
    loginUser(loginDetail).then((data)=>{
      console.log("user login : ")
      console.log(data)

      //save the data yo localStorage
      doLogin(data,()=>{
        console.log("login detail is saved to localStorage");

        //redirect to user dashboard page
        navigate("/user/dashboard")
      })

      toast.success("Login Success");

    }).catch(error=>{
      console.log(error);
      if(error.response.status===400 || error.response.status===404){
        toast.error(error.response.data.message)
      }
      toast.error("Something went wrong on server");
    })

  }

    const handleReset=()=>{
      SetLoginDetail({
        username:'',
        password:''
      });
    };

   


    return(
        
    <Base>
    <div className="bgcontainer">
    <Row className='mt-4'>
      <Col sm={{size:6,offset:3}} color='dark'>
         
    <div style={{border:"1px solid ",width:"auto" ,height:"auto",padding:"40px 20px 20px 20px"}} className="container"><h1 >Login</h1>
        <Form onSubmit={handleFormSubmit}>
        
      <FormGroup>
        <Label for="email">Email</Label>
        <Input 
          type="email" 
         
          id="email" 
          placeholder="Enter your email" 
          value={loginDetail.username}
          onChange={(e)=>handleChange(e,'username')}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input 
          type="password" 
         
          id="password" 
          placeholder="Enter your password" 
         value={loginDetail.password}
         
         onChange={(e)=>handleChange(e,'password')}
        />
      </FormGroup>
     

      <Container className="text-center">
          <Button  color='primary'>Login</Button>
          <Button onClick={handleReset} className='ms-2' color='secondary' type='reset'  >Reset</Button>
      </Container>
    </Form>
    </div>
      </Col>
    </Row>
    </div>
    </Base>
      
    )
}

export default Login;