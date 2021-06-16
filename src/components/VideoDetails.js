import { useParams,Link } from "react-router-dom";

const VideoDetails = () => {

    
    let {id}= useParams()
    const det = JSON.parse(localStorage.getItem(id));
    const url = (det[0].video_url);
    
    //split into two and get the part after =
    var res=url.split("=")
    var embedUrl="https://www.youtube.com/embed/"+res[1];
    
    return ( <>
        <button> <Link to='/'>Go back</Link> </button> 
        <div>
        <iframe width="560" 
         height="315"
         src={embedUrl}
         frameborder="0" 
         allow="autoplay; encrypted-media" 
         allowfullscreen></iframe>
         </div>

         <div style={{display:'flex',textAlign:'center'}}>
         <Link className='actionitems' to={`/edit/${id}`}>EDIT</Link>
         </div>
        
        </> );
}
 
export default VideoDetails;