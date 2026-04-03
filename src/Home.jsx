import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home (){
    const [post,setpost]=useState(null)


    useEffect(()=>{

        const controller=new AbortController;
        const signal=controller.signal;

        setTimeout(()=>
        fetch("http://localhost:3000/courses",{signal})

        .then(res=>{
            return res.json()
        })
        .then((data)=>{
            // console.log(data);
            setpost(data)
        })
        .catch(err=>{
            console.log(err);
        })
        ,3000)

        // Clean up function
        return()=>{
            console.log("unmonuted,Clean up")
            controller.abort();
        }
    },[])


    return(

        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">
                    Code IO
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#courses">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


      <div style={{display:"flex", padding:"20px", margin:"20px", gap:"20px"}}>
        {post && post.map(posts=>{
            return(
                <div>
            <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{posts.title}</h5>
      <h3>{posts.price}</h3>
      <img src={posts.image}/>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
     </div>
    </div>
        </div>
            )
        })}
      </div>
        
        </>
    );
}

export default Home;