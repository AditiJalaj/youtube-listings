import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const EachVideo = ({ title, description, tag, hiddenvid, id, url }) => {

  const [hidden, setHidden] = useState(false);

  
  const hideHandler = () => {
    setHidden(!hidden);

    //below points to correct value and it's being set to localstorag too 
    //but in hidden or videolistings it's getting it undefined
    //check the edit details , see null values
    console.log('the new  tag on hide handler is ',tag)

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


  //on changing the hide or show the tag is going undefined since state is not passed correctly

 
  return (
    <>
    
      {!hidden && (
        <div style={{ margin: "12px", border: "1px solid blue" }}>
          <h3 style={{ backgroundColor: "aqua", display: "inline" }}>
            {title}  </h3>
          
          
          <div>
          {tag && tag.map((i)=>{
            return <h4 className="tags">{i}</h4>
          } )}
          </div>

          <Link to={`/videodetails/${id}`}>Go to Details</Link>
          <button onClick={hideHandler}>Add to Hidden Videos</button> 
          <Link to={`/edit/${id}`}>EDIT</Link>
        </div>
      )}
    </>
  );
};

export default EachVideo;
