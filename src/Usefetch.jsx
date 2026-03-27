import { useEffect, useState } from 'react'

const Usefetch=(url)=>{
     const [courses,setcourse]=useState(null);
      const [error,seterror]=useState(null);

    
     useEffect(()=>{

        setTimeout(() => { 
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error("input error")
            }
            console.log(res);
            return res.json()
        })
        .then(data=>{
            setcourse(data);
        })
        .catch((err)=>{
            console.log(err.message);
            seterror(err.message)
        })
         }, 2000);
    },[]);

    return [courses,error]
}

export default Usefetch;