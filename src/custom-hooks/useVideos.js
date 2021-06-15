import { useState, useEffect } from "react";

const useVideos = () => {
  const [allval, setAllval] = useState([]);

  //useeffect to get items from localstorage
  useEffect(() => {
    var values = [];
    const keysArr = Object.keys(localStorage); 
    var i = keysArr.length;
    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keysArr[i])));
    }
    console.log("values of localstorage", values);
    setAllval(values);
  }, []);

  return { allval };
};

export default useVideos;
