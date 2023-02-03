import {Base_Url, MyAxios} from "./helper";

export const createPost=(postData)=>{
    return MyAxios.post(Base_Url+`/user/${postData.userId}/category/${postData.categoryId}/posts`,postData)
    .then((Response)=> Response.data);  
};
