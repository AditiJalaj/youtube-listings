import { useState } from "react";
import EditForm from "./EditForm";
import { useHistory, useParams } from 'react-router-dom'
import {BrowserRouter as Router, Route ,Link } from 'react-router-dom'

const EachVideo = ({title,tag}) => {

    const [hidden, setHidden]=useState(false)
    const { eid } = useParams()

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
        
        <Router>
        <Link to='/edit/:eid'>EDIDITIT</Link>
        <Route exact path='/edit/:id' component={EditForm}></Route>
        </Router>

        </div>}
        </> );
}
 
export default EachVideo;