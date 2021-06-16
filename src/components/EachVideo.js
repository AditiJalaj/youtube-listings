import { useState } from "react";
import { Link } from "react-router-dom";


const EachVideo = ({ title, description, tag, hiddenvid, id, url }) => {

  const [hidden, setHidden] = useState(false);

  
  const hideHandler = () => {
    setHidden(!hidden);

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
 
  return (
    <>
    
      {!hidden && (
        <div style={{ margin: "12px", border: "1px solid blue" }}>
          <h2 style={{ backgroundColor: "aqua", display: "inline" }}>
             {title}  </h2>
          
          
          <div>
          {tag && tag.map((i)=>{
            return <h4 className="tags">{i.value}</h4>
          } )}
          </div>

          <div style={{display: 'flex',
          justifyContent: 'space-around'}}>
          <Link className='actionitems' to={`/videodetails/${id}`}>Go to Details</Link>
          <button onClick={hideHandler}>Add to Hidden Videos</button> 
          <Link className='actionitems' to={`/edit/${id}`}>EDIT VIDEO</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default EachVideo;
