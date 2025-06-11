import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./CustomArrow";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // px-6 md:px-16 lg:px-32
    <div>
      <section className="bg-primary text-white py-20 flex justify-center items-center min-h-[500px] slider-container">
        <Slider {...settings} className="container px-4">
          {/* slider - 1 */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Advance Your Career With <br className="hidden sm:block" />
              Expert-Led Courses
            </h1>
            <p className="mt-6 text-lg text-[#c0c3ff]">
              Learn the most in-demand skills from industry experts and
              transform your career path today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#332c91] font-medium py-3 px-6 rounded-md hover:bg-gray-200 transition cursor-pointer">
                Explore Courses
              </button>
              <button className="bg-transparent border border-white py-3 px-6 rounded-md  transition font-medium hover:bg-white/10 cursor-pointer">
                Become an Instructor
              </button>
            </div>
          </div>
          {/* slider - 2 */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Advance Your Career With <br className="hidden sm:block" />
              Expert-Led Courses
            </h1>
            <p className="mt-6 text-lg text-[#c0c3ff]">
              Learn the most in-demand skills from industry experts and
              transform your career path today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#332c91] font-medium py-3 px-6 rounded-md hover:bg-gray-200 transition cursor-pointer">
                Explore Courses
              </button>
              <button className="bg-transparent border border-white py-3 px-6 rounded-md  transition font-medium hover:bg-white/10 cursor-pointer">
                Become an Instructor
              </button>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default Banner;
