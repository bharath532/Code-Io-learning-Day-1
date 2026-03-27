import Course from './Course'

import { useEffect, useState } from 'react'
import Usefetch from './Usefetch'

function Courselist(){

   
const[courses,error]=Usefetch('http://localhost:3000/courses');
   

    function handledelete(id){
        const newcourse=courses.filter((course)=> course.id !== id)
        setcourse(newcourse)
    }

    if(!courses){
        return(
            <>
            {!error &&<h1 style={{textAlign:'center',padding:'60px'}}>Loading....</h1>}
            {error &&<h1 style={{textAlign:'center',padding:'60px'}}>{error}</h1>}
            </>
        )
    }
    // courses.sort((a,b) =>a.price -b.price)
    // const trip=courses.filter((course)=>course.price>1000)

    const cousrselist=courses.map((course)=>
    <Course key={course.id} title={course.title} price={course.price} button={course.button} image={course.image} rating={course.rating} delete={handledelete} id={course.id}/>)

    return(
<>
{cousrselist}
</>
    );
}

export default Courselist



// npx json-server --watch data/dummydata.json --port 3000 -- static ./data