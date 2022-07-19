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
        <div className="flex flex-col bg-gray-200">
          {post.map((item) =>
            Object.values(item).map((item) => (
              <div className="border-b-2 border-gray-300 p-4 justify-center text-center">
                <a className=" font-light ">{item}</a>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Forum;
