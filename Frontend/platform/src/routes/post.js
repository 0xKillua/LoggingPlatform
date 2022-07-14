import { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import axios from "axios";
import React from "react";
import token from "../logicControll/decode";
const Post = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState("Come on James");

  const postData = async () => {
    const { temp, id } = token();

    try {
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
    } catch (err) {
      setStatus("Please try again");
    }
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div class="bg-black flex flex-col items-center justify-center h-screen">
        <div class=" flex flex-col items-center bg-neutral-700 h-1/2 w-1/3 gap-y-4">
          <div class="flex flex-row pl-6 pr-4 py-4 w-full">
            <button class="bg-black text-white font-light mr-4">NSFW</button>
            <input
              class="w-full bg-black text-white placeholder-white font-light caret-transparent"
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div class="pr-4 pl-6 h-3/4 w-full">
            <textarea
              class=" h-full w-full bg-black text-white font-light placeholder-white resize-none"
              placeholder="Write Something"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div class=" w-full flex justify-end">
            <button
              class="bg-black text-white rounded-lg mr-4 px-2"
              onClick={postData}
            >
              Post
            </button>
          </div>
          <h class=" text-red-300 pb-4">{status && <h>{status}</h>}</h>
        </div>
      </div>
      <div class="bg-green-500">
        <h>hi</h>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <Navbar></Navbar>

  //       <div class="bg-slate-500 shadow-lg w-1/2 h-1/2 flex flex-col justify-center items-center gap-y-6">
  //         <h class="flex flex-initial font-bold w-full ">Create A New Post</h>
  //         <input
  //           class="w-4/5 bg-black placeholder-white"
  //           placeholder="Title"
  //           type="text"
  //           value={title}
  //           onChange={(e) => setTitle(e.target.value)}
  //         ></input>
  //         {/* </div> */}
  //         <textarea
  //           placeholder="Write Something"
  //           type="text"
  //           class="bg-black placeholder-white resize-none w-4/5 h-2/5"
  //           value={text}
  //           onChange={(e) => setText(e.target.value)}
  //         />
  //         <div>
  //           <button
  //             class="bg-gray-400 w-20 rounded-md font-serif hover:bg-gray-500"
  //             onClick={postData}
  //           >
  //             Post
  //           </button>
  //         </div>
  //         <h>{status && <h>{status}</h>}</h>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Post;
