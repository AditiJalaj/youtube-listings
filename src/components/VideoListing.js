import EachVideo from "./EachVideo";
import { useEffect, useState } from "react";
import useVideos from '../custom-hooks/useVideos'

const VideoListing = () => {
  //this should have all movies collection load up here

  const {allval}=useVideos()
 
 //render only non-hidden vids
 const truearr=allval.map((i)=>{
      return i.filter(j=>j.hidden!==true)
})

  return (
    <>
      {truearr &&
        truearr.map((i) => {
          return i.map((j) => {
            return (
              <EachVideo
                key={j.video_id}
                title={j.video_title}
                description={j.video_des}
                tag={j.video_tag.map((z) => z.value)}
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
