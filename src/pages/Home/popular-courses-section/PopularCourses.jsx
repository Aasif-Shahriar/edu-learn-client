// PopularCourses.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../../../components/loading/Loading";
import PopularCourseCard from "./PopularCourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PopularCourses = () => {
  const navigate = useNavigate();
  const [popularCourses, setPopularCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/popular`)
      .then((res) => res.json())
      .then((data) => {
        setPopularCourses(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  // Group courses into chunks of 8 (2 rows x 4 columns)
  const chunkedCourses = [];
  for (let i = 0; i < popularCourses.length; i += 8) {
    chunkedCourses.push(popularCourses.slice(i, i + 8));
  }

  return (
    <div>
      <div className="mb-10 text-center">
        <h2
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-white"
        >
          Featured Courses
        </h2>
        <p
          data-aos="fade-right"
          data-aos-delay="400"
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Explore our most popular and highly-rated courses
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="600" className="relative">
        {/* Custom Navigation Arrows */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 -ml-4 md:-ml-6"
        >
          <FaArrowLeft className="text-gray-700 dark:text-gray-300" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 -mr-4 md:-mr-6"
        >
          <FaArrowRight className="text-gray-700 dark:text-gray-300" />
        </button>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={chunkedCourses.length > 1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {chunkedCourses.map((chunk, index) => (
            <SwiperSlide key={index} className="pb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {chunk.map((course) => (
                  <PopularCourseCard key={course._id} course={course} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-center mt-10"
      >
        <button
          onClick={() => navigate("/courses")}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
        >
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default PopularCourses;
