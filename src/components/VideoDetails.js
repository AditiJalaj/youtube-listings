import { useHistory, useParams,Link } from "react-router-dom";

const VideoDetails = () => {

    //even this component should link to edit form

    let {id}= useParams()
    const det = JSON.parse(localStorage.getItem(id));
    const url = (det[0].video_url);
    
    console.log('type of ',typeof(url) , 'and url',url)
    
    //split into two and get the part after =
    var res=url.split("=")
    var embedUrl="https://www.youtube.com/embed/"+res[1];
    
    return ( <>

        <Link to ='/'>Go back</Link>
        <iframe width="560" 
         height="315"
         src={embedUrl}
         frameborder="0" 
         allow="autoplay; encrypted-media" 
         allowfullscreen></iframe>
        </> );
}
 
export default VideoDetails;