import React from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

export const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute -bottom-12 right-4 z-10 cursor-pointer text-secondary/30 hover:text-white transition-all duration-300"
      onClick={onClick}
    >
      <IoArrowForwardCircleOutline className="w-10 h-10" />
    </div>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute -bottom-12 left-4 z-10 cursor-pointer text-secondary/30 hover:text-white transition-all duration-300"
      onClick={onClick}
    >
      <IoArrowBackCircleOutline className="w-10 h-10" />
    </div>
  );
};
