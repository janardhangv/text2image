import React, { useRef } from "react";
import CustomButton from "../components/CustomButton";
const Prompt = ({ handleClick }) => {
  const inputRef = useRef();
  return (
    <div className=" flex mx-2">
      <input
        className="w-full h-18 p-2 outline-none rounded-l-lg text-lg bg-lime-100"
        type="text"
        placeholder="Ask something..."
        ref={inputRef}
      />
      <CustomButton content="prompt" customStyle="bg-lime-500 px-5 py-2 text-2xl rounded-r-lg text-lime-950 hover:bg-lime-950 hover:text-lime-500 active:bg-lime-500 active:text-lime-950" handleClick={()=>{handleClick(inputRef.current.value)}}/>
    </div>
  );
};

export default Prompt;
