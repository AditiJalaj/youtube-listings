import useVideos from "../custom-hooks/useVideos";
import EachVideo from "./EachVideo";
import {useState} from 'react'

const Hidden = () => {
  const { allval } = useVideos();

//   const [ishidden,setIshidden]=useState(null)

  //render hidden videos
  const hiddenarr = allval.map((i) => {
    return i.filter((j) => j.hidden === true);
  });


  return (<>
    <>
      {hiddenarr &&
        hiddenarr.map((i) => {
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
    </>)
};

export default Hidden;
