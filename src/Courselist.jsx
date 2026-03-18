import Course from './Course'
import Japan from './assets/wang-tianfang-7k5PgbasPew-unsplash.jpg'
import street from './assets/street.jpg'
import mountain from './assets/japan mountain.jpg'

function Courselist(){

    const courses=[
        { 
      id:1,     
      title:"japan", 
      price:700,
     button:"APPLY NOW",
     image:Japan,
     rating:5
        },

         {    
        id:2,  
      title:"Osaka", 
      price:600,
     button:"APPLY NOW",
     image:street,
     rating:5
        },

         {   
        id:3,   
      title:"Tokyo", 
      price:7600,
     button:"APPLY NOW",
     image:mountain,
     rating:5
        },
        {
            id:4,
            title:"kyto",
            price:1500,
            image:street,
            button:"APPLY NOW",
            rating:6,
        }
    ]
    courses.sort((a,b) =>a.price -b.price)
    const trip=courses.filter((course)=>course.price>1000)

    const cousrselist=trip.map((course,index)=>
    <Course key={index} title={course.title} price={course.price} button={course.button} image={course.image} rating={course.rating}/>)

    return(
<>
{cousrselist}
</>
    );
}

export default Courselist