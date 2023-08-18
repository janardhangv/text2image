import React, { useState } from "react";
import { Prompt,ImageRender } from "../features";
import { query } from "../utils";
import { aiApiTypes as apiURL } from "../assets/apiURL";

const Home = () => {
  const [imageElemets, setImageElements] = useState(apiURL);
  const [promted, setPromted] = useState(true);
  function getImages(msg) {
    setImageElements(apiURL);
    imageElemets.map((item) => {
      query({ inputs: msg }, item.apiUrl).catch((e)=>{
        alert(e)
        item.img = "";
        setImageElements((images) => [...images, item]);
      }).then((response) => {
        var url = URL.createObjectURL(response);
        item.img = url;
        setImageElements((images) => [...images, item]);
      });
    });
    setTimeout(()=>setPromted(true),5001)
  }
  return (
    <div className=" ">
      <h2 className=" text-lime-200 text-center m-5 text-4xl">
        Ai<span className=" text-lime-500">Comparision</span>
      </h2>
      <Prompt
        handleClick={(value) => {
          getImages(value);
          setPromted(false);
        }}
      />
      <div className="w-full text-lime-500 flex flex-wrap justify-evenly">
        <ImageRender imageElemets={imageElemets} promted={promted}/>
      </div>
    </div>
  );
};

export default Home;
