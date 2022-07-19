import React from "react";
import Navbar from "../component/navbar";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-rose-50">
        <Navbar />
        <div className="bg-gray-200">
          <h className="text-black">Post</h>
        </div>
      </div>
    </>
  );
};

export default Home;
