//is looged in =>

export const isLoggedIn=()=>{
   let data = localStorage.getItem("data");
    if(data!=null){
        return true;
    }
    else{
        return false;
    }
}

//do login => set to localstorage

export const doLogin=(data,next)=>{
    localStorage.setItem("data" , JSON.stringify(data));
    next()
}

//do logout => remove from localstorage 

export const doLogout=(next)=>{
    localStorage.removeItem("data");
    next()
}

// get current user detail

export const getCurrentUserDetail=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data")).user;
    }
    else{
        return false;
    }
}
