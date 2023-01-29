import {Base_Url, MyAxios} from "./helper";

export const signup=(user)=>{
    return MyAxios.post(Base_Url+"/api/v1/auth/register",user)
    .then((Response)=> Response.data);  
};

export const loginUser=(loginDetail)=>{
    return MyAxios
    .post(Base_Url+"/api/v1/auth/login",loginDetail)
    .then((Response)=> Response.data);
}