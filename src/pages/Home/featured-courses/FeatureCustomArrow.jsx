import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

// NextArrowFeature.jsx
export const NextArrowFeature = ({ onClick }) => {
  return (
    <div
      className="absolute top-0 md:-top-5 right-4 z-10 cursor-pointer text-primary"
      onClick={onClick}
    >
      <IoArrowForwardCircleOutline className="w-7 h-7 md:w-10 md:h-10" />
    </div>
  );
};

// PrevArrowFeature.jsx
export const PrevArrowFeature = ({ onClick }) => {
  return (
    <div
      className="absolute top-0 md:-top-5 right-16 z-10 cursor-pointer text-primary"
      onClick={onClick}
    >
      <IoArrowBackCircleOutline className="w-7 h-7 md:w-10 md:h-10" />
    </div>
  );
};
