import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Post(){
    const [post,setpost]=useState(null);
    const {id}=useParams();

    useEffect(()=>{

        fetch("http://localhost:3000/courses/"+ id)
        
        .then(res=>{
          return  res.json()
        })
        .then((data)=>{
            setpost(data)
        })
        .catch(err=>{
            console.log(err);
        })

    })

    return(
        <>
        <div>
            {post &&<div>
            <h1>{post.title}</h1>
            <h3>{post.content}</h3>
            <h1>Post:{id}</h1>
            </div>}
        </div>
        </>
    );
}

export default Post;