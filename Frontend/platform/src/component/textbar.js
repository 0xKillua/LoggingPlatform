import React from "react";
const Textbar = ({ header, value, setData }) => {
  return (
    <div className="flex justify-center">
      <h className="fixed left-2">{header}</h>
      <input
        className="fixed right-4"
        type={header}
        value={value}
        onChange={setData}
      ></input>
    </div>
  );
};

export default Textbar;
