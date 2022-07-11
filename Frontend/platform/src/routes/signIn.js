import { useState, useEffect } from "react";
import axios from "axios";
import Textbar from "../component/textbar";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [result, setResult] = useState("");

  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/post");
  };

  useEffect(() => {
    setUserData({
      emailAddress: userName,
      password: userPassword,
    });
  }, [userName, userPassword]);

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:3003/api/login", userData);
      if (res.data.result) {
        setResult(`Success! The status is ${res.data.result}`);
        console.log(res.data.token);
        document.cookie = `token = ${res.data.token}`;
        setUserData({});
        setTimeout(routeChange(), 3000);
      } else {
        setResult("wrong username or pw");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login box">
      <Textbar
        header="UserName"
        value={userName}
        setData={(e) => {
          setUserName(e.target.value);
        }}
      ></Textbar>
      <Textbar
        header="Password"
        value={userPassword}
        setData={(e) => {
          setPassword(e.target.value);
        }}
      ></Textbar>
      <div>
        <button onClick={login}>login</button>
        <a href="/register">Register Now!</a>
      </div>
      <div>{result && <h>{result}</h>}</div>
    </div>
  );
};

export default SignIn;
