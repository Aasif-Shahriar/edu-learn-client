// FeaturedCourses.jsx
import React, { useEffect, useState } from "react";
import Loading from "../../../components/loading/Loading";
import CourseCard from "./CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrowFeature, PrevArrowFeature } from "./FeatureCustomArrow";
import { useNavigate } from "react-router";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/latest`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowFeature />,
    prevArrow: <PrevArrowFeature />,
    rows: 2,
    slidesPerRow: 5,
    responsive: [
      {
        breakpoint: 1536, // 2xl screens
        settings: {
          rows: 2,
          slidesPerRow: 3,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // xl screens
        settings: {
          rows: 2,
          slidesPerRow: 3,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          rows: 2,
          slidesPerRow: 2,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          rows: 2,
          slidesPerRow: 2,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          rows: 1,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="mb-8">
        <h2
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-3xl font-bold mb-2 text-gray-800 dark:text-white"
        >
          Latest Courses
        </h2>
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-gray-600 dark:text-gray-300"
        >
          Explore the newly added courses.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="400" className="slider-container">
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course._id} className="px-2">
              <CourseCard course={course} />
            </div>
          ))}
        </Slider>
      </div>

      <div data-aos="fade-up" data-aos-delay="400" className="text-center mt-8">
        <button
          onClick={() => navigate("/courses")}
          className="px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-medium transition-all duration-300"
        >
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default FeaturedCourses;
