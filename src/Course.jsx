import Japan from './assets/wang-tianfang-7k5PgbasPew-unsplash.jpg'
import Propstypes from 'prop-types'

function Course(props){
    
           return(
        <>
         <div className="  course ">
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <p>{props.rating}</p>
            <button className="btn btn-outline-info text-black     ">{props.button}</button>
        </div>
        </>
    );
    
   
}


Course.Propstypes={
    price:Propstypes.number,
    title:Propstypes.number
}
export default Course