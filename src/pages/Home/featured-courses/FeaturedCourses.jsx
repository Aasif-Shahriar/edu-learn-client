import React, { useEffect, useState } from "react";
import Loading from "../../../components/loading/Loading";
import CourseCard from "./CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrowFeature, PrevArrowFeature } from "./FeatureCustomArrow";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/courses/latest")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrowFeature />,
    prevArrow: <PrevArrowFeature />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="max-w-7xl mx-auto px-4 py-10 relative">
      <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
      <p>Explore our most popular and highly-rated courses</p>

      <div className="slider-container">
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course._id} className="py-10 px-2">
              <CourseCard course={course} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedCourses;
