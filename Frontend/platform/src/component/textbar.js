import React from "react";
const Textbar = ({ value, placeholder, setData }) => {
  return (
    <div className="flex flex-row justify-center ">
      {/* <h className="flex justify-center items-center font-light basis-1/3">
        {header}
      </h> */}
      <input
        className="basis-1/2 border-2  border-gray-300 hover:border-green-300 "
        // type={header}
        value={value}
        placeholder={placeholder}
        onChange={setData}
      ></input>
    </div>
  );
};

export default Textbar;
