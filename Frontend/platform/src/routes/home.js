import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
const Home = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/create-account");
  };
  return (
    <div className="LoginPage">
      <div className="Mainbox">
        <div className="Heading">
          <h>Login to Main Page!</h>
        </div>
        <div className="Username">
          <h>Username: </h>
          <input type="text"></input>
        </div>
        <div className="Password">
          <h>Password: </h>
          <input type="text"></input>
        </div>
        <button>Submit</button>
        <button onClick={routeChange}>Create Account</button>
      </div>
    </div>
  );
};

export default Home;
