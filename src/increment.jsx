import { useState } from "react";

function Increment(){
    const [count,setcount]=useState(0);


    function inc(){
        setcount(precount=> precount +1)
        setcount(precount=> precount +1)
    };
    

    function decrease(){
        setcount(count-1)
    }
    return(
        <>
        <div className="m-5">
            <p>{count}</p>
            <button  className="btn btn-primary" onClick={inc}>Increment</button>
            <button className="btn btn-success" onClick={decrease}>Increment</button>
          
        </div>
        </>
    );
}

export default Increment