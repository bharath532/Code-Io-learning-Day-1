import { useState } from "react";
import Increment from "./increment";

function lOGIN(){

    const [pwd1,setpwd1]=useState("")
    const [pwd2,setpwd2]=useState("")
    const [same,setsame]=useState(true)
    
    function handlepwd1change(event){
        setpwd1(event.target.value)
        console.log(event.target.value);
        
    }

    function handlepwd2change(event){
        setpwd2(event.target.value)
        
              if(pwd1==event.target.value){
            console.log("Password Same");
            setsame(true);
            
        }
        else{
            console.log("Password Not Same");
            setsame(false);
        }
    }


    


    return(

        <>

        <form className="my-5 " action="" style={{padding:'30px', textAlign:"center", margin:"20px"}}>
        <h3>Login form</h3>
            <label htmlFor="" style={{padding:"20px"}}>Username </label>
            <input type="text" placeholder="Enter the name" />
            <br />
            {/* <br /> */}
            <label htmlFor="" style={{padding:"20px"}}>Password</label>
            <input type="password" value={pwd1}  onChange={handlepwd1change} placeholder=" Enter your password" />
            <br />
            <label htmlFor="" style={{padding:"20px"}}>RE-Password</label>
            <input type="password"  onChange={handlepwd2change} value={pwd2} placeholder=" Enter your password" />
            <br/>
            <label htmlFor="" className="check-box">I agree</label>
            <input type="checkbox"  />
            <br/>
            {!same &&<p>password don't match</p>}
            <button type="submit" className="btn btn-outline-warning text-black" >Submit</button>
        </form>

        <Increment/>
        </>
    );
}

export default lOGIN;