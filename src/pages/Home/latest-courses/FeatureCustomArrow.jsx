import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// NextArrowFeature.jsx
export const NextArrowFeature = ({ onClick }) => {
  return (
    <div
      className="absolute top-0 md:-top-12 right-4 z-10 cursor-pointer bg-gray-100 p-2 rounded-full shadow-md text-blue-500 dark:bg-gray-800"
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={25} />
    </div>
  );
};

// PrevArrowFeature.jsx
export const PrevArrowFeature = ({ onClick }) => {
  return (
    <div
      className="absolute top-0 md:-top-12 right-16 z-10 cursor-pointer bg-gray-100 p-2 rounded-full shadow-md text-blue-500 dark:bg-gray-800"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={25} />
    </div>
  );
};
