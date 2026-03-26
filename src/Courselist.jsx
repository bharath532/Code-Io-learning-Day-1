import Course from './Course'

import { useEffect, useState } from 'react'

function Courselist(){

    const [courses,setcourse]=useState(null);

    useEffect(()=>{
        fetch('http://localhost:3000/courses')
        .then(res=>{
            console.log(res);
            return res.json()
        })
        .then(data=>{
            setcourse(data);
        })
    },[])

    function handledelete(id){
        const newcourse=courses.filter((course)=> course.id !== id)
        setcourse(newcourse)
    }

    if(!courses){
        return(
            <>
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