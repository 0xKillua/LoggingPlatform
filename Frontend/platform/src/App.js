import Post from "./routes/post";
import Authenticate from "./logicControll/authLogic";
import SignIn from "./routes/signIn";
import CreateAccount from "./routes/createAccount";
import { jwtId } from "./logicControll/userContext";
import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./routes/profile";
import Home from "./routes/home";
import Forum from "./routes/forum";
import ReadPost from "./routes/readPost";
function App() {
  let data = "";
  const token = decodeURIComponent(document.cookie);
  if (token) {
    const arr = token.split("=");
    const temp = arr[1];
    const temp1 = jwtDecode(temp);
    data = temp1.id;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <jwtId.Provider value={data}>
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/register" element={<CreateAccount />}></Route>
            <Route
              path="/post"
              element={
                <Authenticate>
                  <Post />
                </Authenticate>
              }
            ></Route>
            <Route path="/forum" element={<Forum />}></Route>
            <Route path="/profile/:id" element={<Profile />}></Route>
            <Route path="/post/:postId" element={<ReadPost />}></Route>
          </Routes>
        </jwtId.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
