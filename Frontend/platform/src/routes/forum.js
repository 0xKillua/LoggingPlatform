import { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import axios from "axios";
import React from "react";
import moment from "moment";
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
        <div className="flex flex-col bg-gray-200 h-full">
          {post.map((item) => (
            <div
              id={item._id}
              className="flex flex-col border-b-2 border-gray-300 p-4 "
            >
              <div className="flex flex-row">
                <p className="font-light text-xs pb-3">{item.author}</p>
                <p className="text-xs pl-3">
                  {moment(item.timeSubmitted).fromNow()}
                </p>
              </div>
              <a
                className="font-sans text-l "
                href={`/post/${item._id}`}
                target="_blank"
              >
                <u> {item.topic}</u>
              </a>
            </div>
          ))}
          <span className="grow "></span>
          <p className="p-4  text-center font-bold py-4">The End</p>
        </div>
      </div>
    </>
  );
};

export default Forum;
