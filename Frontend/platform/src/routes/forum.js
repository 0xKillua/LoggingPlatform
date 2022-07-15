import { useState, useEffect } from "react";
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
    <div class="">
      {post.map((item) => (
        <div class=" flex flex-col justify-center bg-red-200 border-black border-2">
          {Object.values(item).map((item) => (
            <p>{item}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Forum;
