import { Link } from "react-router-dom";


function Notfound(){
    return(
        <>
        {/* This is the page that will be displayed when the user tries to access a page that does not exist */}
        <div style={{textAlign:"center",padding:"50px" ,marginTop:"50px"}}>
        <h2 >Error 404 Found found The Page</h2>
        <a href="/">Go to Home</a>
        <Link to="/" className="btn btn-primary">Home page</Link>
        </div>
        </>
    );
}

export default Notfound;