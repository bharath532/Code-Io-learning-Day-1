import { Link } from "react-router-dom";


function Notfound(){
    return(
        <>
        <div style={{textAlign:"center",padding:"50px" ,marginTop:"50px"}}>
        <h2 >Error 404 Found found The Page</h2>
        <a href="/">Go to Home</a>
        <Link to="/" className="btn btn-primary">Home page</Link>
        </div>
        </>
    );
}

export default Notfound;