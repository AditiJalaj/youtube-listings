import EachVideo from "./EachVideo";
import useVideos from '../custom-hooks/useVideos'
import {NavLink} from 'react-router-dom'

const VideoListing = () => {
  //this should have all movies collection load up here
   const {allval}=useVideos()
 
 //render only non-hidden vids
 const truearr=allval.map((i)=>{
      return i.filter(j=>j.hidden!==true)
})

  return (
    <>
    <button className="primary-button"><NavLink exact={true} to='/add'>ADD NEW</NavLink></button>
      {truearr &&
        truearr.map((i) => {
          return i.map((j) => {
            return (
              <EachVideo
                key={j.video_id}
                title={j.video_title}
                description={j.video_des}
                tag={j.video_tag.map(z =>{return z})}
                hiddenvid={j.hidden}
                id={j.video_id}
                url={j.video_url}
              />
            );
          });
        })}
    </>
  );
};

export default VideoListing;
