import { useState } from "react";
import EditForm from "./EditForm";
import {Link } from 'react-router-dom'

const EachVideo = ({ title, description, tag, hiddenvid, id, url}) => {

    const [hidden, setHidden]=useState(false)


    const hideHandler=()=>{
        //add to hidden firebase or localstorage collection logic here
        setHidden(!hidden)
        //and useeffect inside hidden component to load those
        //logic to delete movies from all collections
    }


    return ( <>
        {!hidden && <div style={{margin:'12px',border:'1px solid blue'}}>
        Each Video <h3 style={{backgroundColor:'aqua', display:'inline'}}>{title}</h3> 
        <h4>{tag}</h4> 
        <button > Go to Details</button> 
        {/* go to details will be a link like view lyrics  */}
        <button onClick={hideHandler}>Hide Movie?</button>
        
       
        <Link to={`/edit/${id}`}>EDIT</Link>
        

        </div>}
        </> );
}
 
export default EachVideo;