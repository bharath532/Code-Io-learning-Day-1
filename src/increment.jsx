import { useState } from "react";

function Increment(){
const[count,setcount]=useState(0)

function increment(){
   setcount(count*2)
}

function decrement(){
    setcount(count-1)
}

function reset(){
    setcount(0)
}
    return(
        <>
        <div>
            <p>{count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
        </>
    );
}

export default Increment