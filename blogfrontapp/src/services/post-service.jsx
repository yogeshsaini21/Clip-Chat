import {Base_Url, privateAxois} from "./helper";

export const createPost=(postData)=>{
    console.log(postData);
    return privateAxois.post(Base_Url+`/api/user/${postData.userId}/category/${postData.categoryId}/posts`,postData)
    .then((Response)=> Response.data);  
};
