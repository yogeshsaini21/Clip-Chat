import React, { useState } from 'react';
import {Row,Col,Container,FormFeedback, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Base from '../component/Base';
import { signup } from '../services/user-service';
import {toast} from 'react-toastify'
const Signup = () => {
 
  const [data,setData]=useState({
      name:'',
      email:'',
      password:'',
      about:'',
  })

  // eslint-disable-next-line no-unused-vars
  const [error,setError]= useState({
    errors:{},
    isError:false
  })

  // useEffect(()=>{
  //   console.log(data)
  // },[data])

  //handle change 

  const handleChange=(event,property)=>{
    
    setData({...data,[property]:event.target.value})
  }

  // reset data 

  const resetData=()=>{
    setData({
      name:'',
      email:'',
      password:'',
      about:'',
    })
  }

  const submitData=(event)=>{
    event.preventDefault();

    // if(error.isError){
    //   toast.error("Form data is invalid !")
    //   setError({...error,isError:false})
    //   return;
    // }

    console.log(data);
    // data validation 
    // send data to the server 

    signup(data).then((resp)=>{
      console.log(resp);
      console.log("success log");
      toast.success("User Register Successfully");
      setData({
        name:'',
      email:'',
      password:'',
      about:'',
      })
    }).catch((error)=>{
      console.log(error);
      console.log("error log");
      // toast.error("something went wrong");

      setError({
        errors:error,
        isError:true
      })
    })

  }


  return (


    <Base>
    <div className="bgcontainer">
    <Row className='mt-4'>
      <Col sm={{size:6,offset:3}} color='dark'>
         {/* {JSON.stringify(data )} */}
    <div style={{border:"1px solid ",width:"auto" ,height:"auto",padding:"40px 20px 20px 20px"}} className="container"><h1>Register</h1>
        <Form onSubmit={submitData}>
        <FormGroup>
        <Label for="name">Name</Label>
        <Input 
         invalid={error.errors?.response?.data?.name ? true : false}
          type="text" 
          id="name" 
          placeholder="Enter your Name" 
          onChange={(e)=>handleChange(e,'name')}
          value={data.name}
         
        />
          <FormFeedback>
          {error.errors?.response?.data?.name}
        </FormFeedback>

      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input 
          type="email" 
          id="email" 
          placeholder="Enter your email" 
          onChange={(e)=>handleChange(e,'email')}
          value={data.email}
         invalid={error.errors?.response?.data?.email ? true : false}
        />
         <FormFeedback>
          {error.errors?.response?.data?.email}
        </FormFeedback>
      
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input 
          type="password" 
         
          id="password" 
          placeholder="Enter your password" 
          onChange={(e)=>handleChange(e,'password')}
          value={data.password}
          invalid={error.errors?.response?.data?.password ? true : false}
        />

<FormFeedback>
          {error.errors?.response?.data?.password}
        </FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="about">about</Label>
        <Input 
          type="textarea" 
          onChange={(e)=>handleChange(e,'about')}
          id="about" 
          placeholder="Enter About yourself" 
          style={{height:"150px"}}
          value={data.about}
          invalid={error.errors?.response?.data?.about ? true : false}
        />

<FormFeedback>
          {error.errors?.response?.data?.about}
        </FormFeedback>
      </FormGroup>



      <Container className="text-center">
          <Button color='primary'>Signup</Button>
          <Button onClick={resetData} className='ms-2' color='secondary' type='reset'  >Reset</Button>
      </Container>
    </Form>
    </div>
      </Col>
    </Row>
    </div>
    </Base>
  );
};

export default Signup;
