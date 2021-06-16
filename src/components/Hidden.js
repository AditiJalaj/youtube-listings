import useVideos from "../custom-hooks/useVideos";
import EachVideo from "./EachVideo";
import {Link} from 'react-router-dom'

const Hidden = () => {
  const { allval } = useVideos();
 
  //render hidden videos
  const hiddenarr = allval.map((i) => {
    return i.filter((j) => j.hidden === true);
  });
  

  return (
      <>
      {hiddenarr &&
        hiddenarr.map((i) => 
        {
          return i.map((j) => {
            return (
           <div style={{ margin: "12px",
            border: "1px solid blue" }}>
          <h3 style={{ backgroundColor: "aqua", 
          display: "inline" }}>
          {j.video_title}  </h3>
            
          <div>
          {j.video_tag.map((z)=>  <h4 className="tags"> {z.value}</h4>)}
           </div>

           <Link to={`/videodetails/${j.video_id}`}>Go to Details</Link>
           <Link to={`/edit/${j.video_id}`}>EDIT</Link>
              
             </div> 
            );
          });
        })}
    
    </>)
};

export default Hidden;
