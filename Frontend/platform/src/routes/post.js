import { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import axios from "axios";
import React from "react";
import token from "../logicControll/decode";
const Post = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState("post now");

  const postData = async () => {
    const { temp, id } = token();

    const res = await axios.post(
      `http://localhost:3003/api/post`,
      {
        author: id,
        topic: title,
        text: text,
      },
      {
        headers: {
          Authorization: temp,
        },
      }
    );

    setStatus(res.data.status);
    setText("");
    setTitle("");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div class="flex h-screen items-center justify-center bg-slate-300">
        <div class="bg-slate-500 shadow-lg w-1/2 h-1/2 flex flex-col justify-center items-center gap-y-6">
          <div class="bg-red-100 flex flex-row">
            <h class="w-30 ml-4"> Title</h>
            <input
              size="40"
              class=""
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div class="flex flex-row gap-x-4">
            <h>Enter your data here</h>
            <textarea
              type="text"
              cols="40"
              rows="10"
              class="bg-gray-400 resize-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <button class="bg-gray-400" onClick={postData}>
              post
            </button>
          </div>
          <h>{status && <h>{status}</h>}</h>
        </div>
      </div>
    </div>
  );
};

export default Post;
