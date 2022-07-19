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
        <button
          class=" m-2 font-light text-white"
          onClick={() => routeChange("/home")}
        >
          Home
        </button>
        <button
          class=" m-2 font-light text-white"
          onClick={() => routeChange("/post")}
        >
          Post
        </button>

        <button
          class=" m-2 font-light text-white"
          onClick={() => routeChange(`/profile/${id}`)}
        >
          Profile
        </button>
        <span class="grow"></span>
        <button className="font-light text-white m-2"> Sign out</button>
      </div>
    </div>
  );
};

export default Navbar;
