import React from "react";
import { Link } from "react-router";
import video404 from "../../assets/404 video/404.mp4"; // ✅ Update path if different

const NotFound = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen Video */}
      <video
        src={video404}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex justify-around items-center px-4">
        <div>
          <h1 className="text-white text-5xl md:text-7xl font-medium mb-4">
            Hide & <br /> Seek Time!
          </h1>
          <p className="text-white text-xl md:text-2xl mb-4">
            And you're it! <br /> (Sorry, we can't find the page, too.)
          </p>
          <Link to="/" className="btn text-white hover:text-black btn-outline">
            Go back home
          </Link>
        </div>
        <div></div>
      </div>
      {/*  */}
    </div>
  );
};

export default NotFound;
