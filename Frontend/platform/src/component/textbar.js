import React from "react";
const Textbar = ({ header, value, setData }) => {
  return (
    <div className="flex flex-row h-8 ">
      <h className="flex justify-center items-center font-light basis-1/3">
        {header}
      </h>
      <input
        className="basis-1/2"
        type={header}
        value={value}
        onChange={setData}
      ></input>
    </div>
  );
};

export default Textbar;
