import { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import axios from "axios";
import React from "react";

const Forum = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:3003/api/forum");
      setPost(res.data);
    };
    fetchPost();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div id="forum">
        <div className="flex flex-col bg-gray-200 h-screen">
          {post.map((item) => (
            <div
              id={item._id}
              className="flex flex-row border-b-2 border-gray-300 p-4  text-center "
            >
              <a
                className="font-sans text-l w-5/6 self-center"
                href={`/post/${item._id}`}
                target="_blank"
              >
                <u> {item.topic}</u>
              </a>
              <p className="font-light text-xs pb-3">
                {`Author: ${item.author}`}{" "}
              </p>
            </div>
          ))}
          <span className="grow "></span>
          <p className="p-4 w-5/6 text-center font-bold py-4">The End</p>
        </div>
      </div>
    </>
  );
};

export default Forum;
