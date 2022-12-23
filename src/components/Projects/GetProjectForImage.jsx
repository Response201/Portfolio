import React, { useEffect, useState } from "react";
/* import coffee from "../../assets/images/coffee.png"; */
import weather from "../../assets/images/weather.jpg";
import todo from "../../assets/images/todo.png";
import foodnary from "../../assets/images/foodnary.png";
import coff from '../../assets/images/coffee.png'

export const GetProjectForImage = ({ item }) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    if (item === "weather") {
      setImage(weather);
    }
    if (item === "coff") {
      setImage(coff);
    }
    if (item === "todo") {
      setImage(todo);
    }
    if (item === "foodnary") {
      setImage(foodnary);
    }
  }, []);

  return <img src={image} style={{ height:'100%', width: "100%", position: "absolute", objectFit: 'cover' }} />;
};
