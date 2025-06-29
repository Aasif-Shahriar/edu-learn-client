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

  console.log(popularCourses);

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

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2
        data-aos="fade-right"
        data-aos-delay="200"
        className="text-3xl font-bold mb-4"
      >
        Featured Courses
      </h2>
      <p data-aos="fade-right" data-aos-delay="400" className="mb-8">
        Explore our most popular and highly-rated courses
      </p>

      <div data-aos="fade-up" data-aos-delay="600" className="relative">
        {/* Custom Arrows */}
        <button
          ref={prevRef}
          className="absolute -bottom-5 left-0 z-10  bg-white p-3 rounded-full shadow hover:bg-primary hover:text-white transition"
        >
          <FaArrowLeft />
        </button>
        <button
          ref={nextRef}
          className="absolute -bottom-5 right-3 z-10 bg-white p-3 rounded-full shadow hover:bg-primary hover:text-white transition"
        >
          <FaArrowRight />
        </button>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
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
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {popularCourses.map((course) => (
            <SwiperSlide key={course._id} className="py-10">
              <PopularCourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div data-aos="fade-up" data-aos-delay="600" className="text-center mt-8">
        <button
          onClick={() => navigate("/courses")}
          className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
        >
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default PopularCourses;
