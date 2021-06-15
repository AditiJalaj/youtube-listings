import { useState } from "react";
import { Link } from "react-router-dom";

const EachVideo = ({ title, description, tag, hiddenvid, id, url }) => {

  const [hidden, setHidden] = useState(false);

  const hideHandler = () => {
    setHidden(!hidden);

    //to modify the localstorage item as !hiddenvid
    var documents = [];
    documents.push({
      video_url: url,
      video_title: title,
      video_des: description,
      video_tag: tag,
      hidden: !hiddenvid,
      video_id: id,
    });
    localStorage.setItem(id, JSON.stringify(documents));
  };

  console.log('tag si ',tag)
  return (
    <>
      {!hidden && (
        <div style={{ margin: "12px", border: "1px solid blue" }}>
          Each Video{" "}
          <h3 style={{ backgroundColor: "aqua", display: "inline" }}>
            {title}
          </h3>
          
          <h4>{tag}</h4>

          <Link to={`/videodetails/${id}`}>Go to Details</Link>
          <button onClick={hideHandler}>{ hiddenvid ?'SHOW MOVIE':'HIDE MOVIE'}</button>
          <Link to={`/edit/${id}`}>EDIT</Link>
        </div>
      )}
    </>
  );
};

export default EachVideo;
