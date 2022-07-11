import React from "react";
const Textbar = ({ header, value, setData }) => {
  return (
    <div className="Box">
      <div className="textBox">
        <h>{header}</h>
        <input type={header} value={value} onChange={setData}></input>
      </div>
    </div>
  );
};

export default Textbar;
