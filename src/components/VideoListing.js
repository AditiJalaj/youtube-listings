import EachVideo from "./EachVideo";
import { useEffect, useState } from "react";

const VideoListing = () => {
  //this should have all movies collection load up here

  const [allval, setAllval] = useState([]);

  //useeffect to get items from backend
  useEffect(() => {
    var values = [];
    const keysArr = Object.keys(localStorage); //[1222,13333]
    var i = keysArr.length;
    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keysArr[i])));
    }
    console.log("values of localstorage", values);
    setAllval(values);
  }, []);

  //console.log('all val', allval)

  return (
    <>
      {allval &&
        allval.map((i) => {
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
