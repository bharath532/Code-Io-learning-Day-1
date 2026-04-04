import { useState ,useContext, useEffect,useRef} from "react";
import { dataContext } from "./Home";



function Increment(){
    const [count,setcount]=useState(0);

    const refcount=useRef(0);
    const data=useContext(dataContext)
    
    
    function inc(){
        setcount(count+1)
        refcount.current ++;
        console.log('count :'+count);
        console.log('ref count :'+refcount.current);
        
    };
    

    function decrease(){
        setcount(count-1)
    }


    useEffect(()=>{
        // console.log(count);
        // console.log(refcount);
    })


    return(
        <>
        <div className="m-5">
            <p>{refcount.current}</p>
            <button  className="btn btn-primary" onClick={inc}>Increment</button>
            <button className="btn btn-success" onClick={decrease}>decrement</button> 
            <button className=" btn btn-warning" onClick={()=>setcount(refcount.current)}>Update</button>

        </div>

        </>
    );
}

export default Increment