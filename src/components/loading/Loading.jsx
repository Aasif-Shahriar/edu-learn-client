import Lottie from "lottie-react";
import React from "react";
import loading from "../../assets/lotties/loading_lottie.json";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
     
        <Lottie className="w-[200px]" animationData={loading} loop={true}></Lottie>

    </div>
  );
};

export default Loading;
