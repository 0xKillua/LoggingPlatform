import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { jwtId } from "../logicControll/userContext";
import React from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };
  const id = useContext(jwtId);

  //   console.log(value);
  //   const obj = {
  //     Home: () => routeChange("post"),
  //   };

  return (
    <div class="top-0 flex space-x-4 bg-slate-500">
      <button
        class=" font-light text-white"
        onClick={() => routeChange("/home")}
      >
        Home
      </button>
      <button
        class=" font-light text-white"
        onClick={() => routeChange("/post")}
      >
        Post
      </button>
      <button
        class=" font-light text-white"
        onClick={() => routeChange(`/profile/${id}`)}
      >
        Profile
      </button>
    </div>
  );
};

export default Navbar;
