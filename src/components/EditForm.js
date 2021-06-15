import { useState } from "react";
import { useHistory, useParams,Link } from "react-router-dom";
import Select from "react-select";

const EditForm = () => {
  let history=useHistory()
  let { id } = useParams(); //this will give id

  //to get details for that id
  const det = JSON.parse(localStorage.getItem(id));
 // console.log("det", det);

  //initialize states for all fields 
  const [url, setUrl] = useState(det[0].video_url);
  const [title, setTitle] = useState(det[0].video_title);
  const [description, setDescription] = useState(det[0].video_des);
  const [checked, setChecked] = useState(det[0].hidden);
  const [selectedTag, setSelectedTag] = useState(det[0].video_tag);

  const options = [
    { value: "Coding", label: "Coding" },
    { value: "Productivity", label: "Productivity" },
    { value: "Technology", label: "Technology" },
    { value: "Music", label: "Music" },
    { value: "Food", label: "Food" },
    { value: "Travel", label: "Travel" },
    { value: "Movies", label: "Movies" },
  ];


  var documents = [];
  const submitForm = (e) => {
    console.log("submit form");
    e.preventDefault();

    documents.push({
      video_url: url,
      video_title: title,
      video_des: description,
      video_tag: selectedTag,
      hidden: checked,
      video_id: id,
    });

    localStorage.setItem(id, JSON.stringify(documents));
    history.push('/')
  };

  const handleSelect = (e) => {
    //console.log('e is ',e)
    setSelectedTag(e);
  };
  return (
    <>
      <Link to='/'>GO BaCK</Link>
      <h1>EDIT VIDEO </h1>
      <form onSubmit={submitForm}>
        <section>
          <label htmlFor="url">Enter Youtube Video Url:</label>
          <input
            id="url"
            type="url"
            placeholder="https://example.com"
            pattern="https://.*.youtube.com.*"
            size="30"
            required
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </section>

        <section>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter Video Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </section>

        <section>
          <label htmlFor="Description">Description:</label>
          <textarea
            id="description"
            placeholder="Enter Desciption here..."
            rows="5"
            cols="33"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </section>

        <section>
          <label htmlFor="tags">Choose Tag: </label>
          <Select
            value={selectedTag}
            isSearchable
            isMulti
            placeholder="Select Options"
            options={options}
            onChange={handleSelect}
          />
        </section>

        <section>
          <label htmlFor="checked">Hide video?</label>
          <input
            id="hidden"
            type="checkbox"
            defaultChecked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
        </section>
        <input type="submit" />
      </form>
    </>
  );
};

export default EditForm;
