import axios from 'axios';

import { getToken } from '../auth';

export const Base_Url = `http://localhost:5000`

export const MyAxios =axios.create({
    baseurl:Base_Url,
});

export const privateAxois = axios.create({
    baseURL:Base_Url
})

privateAxois.interceptors.request.use(config=>{
    const token = getToken()
    console.log(token)
    if(token){
        config.headers.common.Authorization=`Bearer ${token}` ;
       console.log(config)
    }
    return config

},error=>Promise.reject(error))