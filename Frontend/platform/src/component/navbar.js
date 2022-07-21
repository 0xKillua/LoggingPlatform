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
    <div id="Navbar">
      <div class="w-full px-3 py-2 align-center justify-between bg-gray-500 flex flex-row ">
        <a href="/forum" className="m-2 font-light text-white">
          Forum
        </a>
        <a
          href="/post"
          className="m-2 font-light text-white"
          class=" m-2 font-light text-white"
        >
          Post
        </a>
        <a href={`/profile/${id}`} class=" m-2 font-light text-white">
          Profile
        </a>
        <span class="grow"></span>
        <a href="/" className="font-light text-white m-2">
          Sign out
        </a>
      </div>
    </div>
  );
};

export default Navbar;
