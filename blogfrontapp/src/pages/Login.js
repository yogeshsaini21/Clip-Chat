import Base from "../component/Base";
import React, { useState } from 'react';
import {Row,Col,Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login=()=>{
    return(
        
    <Base>
    <div className="bgcontainer">
    <Row className='mt-4'>
      <Col sm={{size:6,offset:3}} color='dark'>
         
    <div style={{border:"1px solid ",width:"auto" ,height:"auto",padding:"40px 20px 20px 20px"}} className="container"><h1 >Login</h1>
        <Form>
        
      <FormGroup>
        <Label for="email">Email</Label>
        <Input 
          type="email" 
         
          id="email" 
          placeholder="Enter your email" 
          
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input 
          type="password" 
         
          id="password" 
          placeholder="Enter your password" 
         
        />
      </FormGroup>
     

      <Container className="text-center">
          <Button color='primary'>Signup</Button>
          <Button className='ms-2' color='secondary' type='reset'  >Reset</Button>
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