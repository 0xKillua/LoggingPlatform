import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Textbar from "../component/textbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar";

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
    // <div class=" flex flex-col absolute inset-0 justify-center items-center bg-gray-300 text-center">
    // {/* <div className="flex flex-col justify-center bg-white h-1/2 w-1/4 gap-y-6 rounded-lg"> */}
    <div className="h-screen bg-gray-200 flex justify-center items-center text-center">
      <div className="h-1/2 w-1/2  bg-white flex flex-col gap-y-2 rounded-lg justify-center">
        <h class="font-sans text-lg text-green-400 my-6">
          <u>Sign in to Account</u>
        </h>
        <Textbar
          // header="UserName"
          value={userName}
          placeholder="EmailAddress"
          setData={(e) => {
            setUserName(e.target.value);
          }}
        ></Textbar>
        <Textbar
          // header="Password"
          value={userPassword}
          placeholder="Password"
          setData={(e) => {
            setPassword(e.target.value);
          }}
        ></Textbar>
        <div class="flex justify-center">
          <button
            className="font-light rounded-lg bg-slate-600/70 text-gray-200 w-1/5 hover:bg-slate-600/90"
            onClick={login}
          >
            login
          </button>
        </div>
        <a class="font-light text-rose-500/70" href="/register">
          <u>Register Now!</u>
        </a>
        <div>{result && <h>{result}</h>}</div>
      </div>
    </div>
  );
};

export default SignIn;
