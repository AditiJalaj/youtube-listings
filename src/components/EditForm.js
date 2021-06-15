import { useState } from "react";
import { useHistory, useParams } from 'react-router-dom'


const EditForm = ({props}) => {
    
 // console.log(props.match.params.id)
 //edit component not re rendering on taking link
    

    //states for all properties like url, desc, title, etc
    const [url,setUrl]=useState('')
  const [title,setTitle]=useState('')
   const [description,setDescription]=useState('')
const [checked,setChecked]=useState(false)
const [selectedTag,setSelectedTag]=useState(null)

    // load data from local storage on mount and set State for these vals 
    const getAllFromLs=()=>{
        var values=[]
        const keysArr=Object.keys(localStorage) //[1222,13333]
        var i=keysArr.length

        while(i--){
            values.push(JSON.parse(localStorage.getItem(keysArr[i])))
        }
        console.log('values',values)
    }
    return ( <>
        <h1> I'm the edit component </h1>
        <button onClick={getAllFromLs}>CLICK </button>
        </>
         );
}
 
export default EditForm;