import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
const Profile = () => {
  const [userData, setUserData] = useState({});
  const token = decodeURIComponent(document.cookie);
  const temp = token.split("=");
  const jwtToken = temp[1];
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3003/api/get-profile/${id}`,
          {
            headers: { Authorization: jwtToken },
          }
        );
        setUserData(res.data);
      } catch (err) {
        setUserData({ status: "You are not authorized! Please sign in!" });
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="box">
      <div className="text detail">
        <div>
          {Object.values(userData).map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
