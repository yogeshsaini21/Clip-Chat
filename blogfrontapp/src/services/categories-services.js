import {Base_Url, MyAxios} from "./helper";

export const loadAllCategories=()=>{
    return MyAxios.get(Base_Url+"/api/categories/").then(response=>{return response.data});
}