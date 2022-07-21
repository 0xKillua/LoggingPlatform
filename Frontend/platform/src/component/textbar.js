import React from "react";
const Textbar = ({ value, placeholder, setData }) => {
  return (
    <div className="m-2">
      <input
        className="w-1/2 md:w-1/3 border-2  border-gray-300"
        value={value}
        placeholder={placeholder}
        onChange={setData}
      ></input>
    </div>
  );
};

export default Textbar;
