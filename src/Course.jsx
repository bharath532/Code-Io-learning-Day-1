import { useState } from 'react';
import Japan from './assets/wang-tianfang-7k5PgbasPew-unsplash.jpg'
import Propstypes from 'prop-types'

function Course(props){


    // let purchased=false;
    const [purchased,setpurchased]=useState(false);
    // const[discount,setdiscount]=useState(props.price)    

    function buycourse(){
        console.log(props.title,"purchased");
        setpurchased(true)
        // setdiscount(discount-amt)
        console.log(purchased);
        
    }
    
           return(
        <>
         <div className="  course ">
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <p>{props.rating}</p>
            <button className="btn btn-outline-info text-black" onClick={()=>buycourse(20)}>{props.button}</button>
            <button className="btn btn-outline-danger text-black" onClick={()=>props.delete(props.id)}>Delete</button>
            <p>{purchased ?"already purchased":"get id now"}</p>
        </div>
        </>
    );
    
   
}


Course.Propstypes={
    price:Propstypes.number,
    title:Propstypes.number
}
export default Course