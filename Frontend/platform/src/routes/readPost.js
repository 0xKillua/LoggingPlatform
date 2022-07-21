import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import Navbar from "../component/navbar";

const ReadPost = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState({});

  const getPost = async () => {
    const res = await axios.get(`http://localhost:3003/api/post/${postId}`);
    setPostData(...res.data);
    // console.log(moment(postData.timeSubmitted, "YYYY-MM-DD"));
  };

  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <p className="w-full p-5 text-l font-bold border-b-2 border-gray-700 ">
          {postData.topic}
        </p>
        <div className="flex flex-col p-5 gap-y-4">
          <div className="flex flex-row ">
            <p className="grow">{`#1 ${postData.author}`}</p>
            <p className="">{moment(postData.timeSubmitted).fromNow()}</p>
          </div>
          <p className="font-light">{postData.text}</p>
        </div>
      </div>
    </>
  );
};

export default ReadPost;
