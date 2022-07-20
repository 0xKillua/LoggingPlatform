import React, { useState } from "react";
import axios from "axios";
import { useParams, useEffect } from "react-router-dom";

const ReadPost = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState({});

  const getPost = async () => {
    const res = await axios.get(`http://localhost:3003/api/post/${postId}`);
  };

  return <h>{postId}</h>;
};

export default ReadPost;
