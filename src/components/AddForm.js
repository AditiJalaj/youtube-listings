import {useState} from 'react'
import {useHistory,Link} from 'react-router-dom'
import Select from 'react-select';

const AddForm = () => {

const history=useHistory()

const [url,setUrl]=useState('')
const [title,setTitle]=useState('')
const [description,setDescription]=useState('')
const [checked,setChecked]=useState(false)
const [selectedTag,setSelectedTag]=useState([])

const options=[
    {value:"Coding",label:"Coding"},
    {value:"Productivity",label:"Productivity"},
    {value:"Technology",label:"Technology"},
    {value:"Music",label:"Music"},
    {value:"Food",label:"Food"},
    {value:"Travel",label:"Travel"},
    {value:"Movies",label:"Movies"}, 
    { value:"Health", label: "Health" },
    { value:"Life", label: "Life" },
    {value:"Entertainment",label:"Entertainment"}
]

const clearInputs=()=>{
    setUrl('')
    setTitle('')
    setDescription('')
    setSelectedTag([])
    setChecked(false)
}

const handleSelect=(e)=>{
    //console.log('e is ',e) 
    setSelectedTag(e) 
}

//console.log('selected tag is outside hadnle select ',selectedTag)

var documents=[]
const submitForm=(e)=>{
    e.preventDefault()
    
    documents.push({
        video_url:url,
        video_title:title,
        video_des:description,
        video_tag:selectedTag,
        hidden:checked,
        video_id:Date.now()
    })
   
    localStorage.setItem(Date.now(),JSON.stringify(documents))
   
    console.log('documents',documents)
    clearInputs()
    alert("added new vid and going back to home")
    history.push('/')
}

    return ( <>
       <button> <Link to='/'>Go back</Link> </button> 
        <h1> ADD NEW VIDEO </h1>
        <form className="form" onSubmit={submitForm}>

        <section>
        <label htmlFor="url">Enter Youtube Video Url:</label>
            <input id="url" type="url"  
            placeholder="https://example.com"
            pattern="https://.*.youtube.com.*" size="30"
            required 
            value={url}
            onChange={(e)=>{setUrl(e.target.value)}}
         />
         </section>

         <section>
         <label htmlFor='title'>Title</label>
         <input id="title" type="text"
          placeholder="Enter Video Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required />
         </section>

         
         <section>
         <label htmlFor="Description">Description:</label>
           <textarea
           id="description"
           placeholder="Enter Desciption here..." 
           rows="5" cols="33"
           required 
           value={description}
           onChange={e=>setDescription(e.target.value)}
           />
         </section>
         
          <section>
            <label htmlFor="tags" >Choose Tag: </label>
            <Select 
            value={selectedTag}
            isSearchable
            isMulti
            placeholder="Select Options"
            options={options}
            onChange={handleSelect}
            />
          </section>

          <section> 
          <label htmlFor="checked">Hide video?</label>
          <input 
          id="hidden"
           type="checkbox" defaultChecked={checked}
           onChange={()=>{setChecked(!checked)}}
          />
        </section>


        <input  className='primary-button' type="submit" />
       
        </form>
        
        
        </> );
}
 
export default AddForm;