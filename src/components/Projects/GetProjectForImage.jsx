import React, { useEffect, useState } from "react";
import coffee from "../../assets/image/coffee.png";
import weather from "../../assets/image/weather.jpg";
import todo from "../../assets/image/todo.png";
import foodnary from "../../assets/image/foodnary.png";

export const GetProjectForImage = ({ item }) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    if (item === "weather") {
      setImage(weather);
    }
    if (item === "coffee") {
      setImage(coffee);
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
