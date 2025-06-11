import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full text-white bg-primary hover:bg-primary-focus transition-all duration-300 cursor-pointer shadow-2xl ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FaArrowUp></FaArrowUp>
    </button>
  );
};

export default BackToTop;
