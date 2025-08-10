import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.jpg";
import banner4 from "../../../assets/images/banner4.jpg";

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300"
      onClick={onClick}
      aria-label="Previous slide"
    >
      <svg
        className="w-5 h-5 md:w-6 md:h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300"
      onClick={onClick}
      aria-label="Next slide"
    >
      <svg
        className="w-5 h-5 md:w-6 md:h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

// Scroll indicator component
const ScrollIndicator = ({ scrollToRef }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
      onClick={scrollToRef}
    >
      <div className="flex flex-col items-center">
        <span className="text-white text-sm mb-2">Explore More</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Stats component for additional content
const StatsBanner = () => {
  const stats = [
    { value: "1M+", label: "Students" },
    { value: "1000+", label: "Courses" },
    { value: "500+", label: "Instructors" },
    { value: "98%", label: "Satisfaction" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
        >
          <div className="text-2xl md:text-3xl font-bold text-white">
            {stat.value}
          </div>
          <div className="text-sm md:text-base text-gray-200 mt-1">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Banner = ({ categoryRef, latestRef, featuredRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div className="absolute bottom-6 w-full flex justify-center">
        <ul className="flex space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          currentSlide === i ? "bg-white w-8" : "bg-white/50"
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
  };

  const slides = [
    {
      title: "Advance Your Career With Expert-Led Courses",
      desc: "Learn the most in-demand skills from industry experts and transform your career path today.",
      buttons: [
        {
          label: "Explore Courses",
          link: "/courses",
          type: "primary",
          icon: "book",
        },
        {
          label: "Become an Instructor",
          link: "/add-course",
          type: "secondary",
          icon: "user-tie",
        },
      ],
      bgImage: banner1,
      extraContent: <StatsBanner />,
    },
    {
      title: "Master New Skills at Your Own Pace",
      desc: "Access over 1000+ courses taught by expert instructors with self-paced learning options.",
      buttons: [
        {
          label: "Latest Course",
          scrollRef: latestRef,
          type: "primary",
          icon: "clock",
        },
        {
          label: "View Categories",
          scrollRef: categoryRef,
          type: "secondary",
          icon: "tags",
        },
      ],
      bgImage: banner2,
    },
    {
      title: "Learn From Anywhere, Anytime You Want",
      desc: "Enjoy the flexibility of online learning with 24/7 access to your courses on any device.",
      buttons: [
        {
          label: "Popular Courses",
          scrollRef: featuredRef,
          type: "primary",
          icon: "star",
        },
        { label: "Learn on the Go", type: "secondary", icon: "mobile-alt" },
      ],
      bgImage: banner3,
    },
    {
      title: "Get Certified & Showcase Your Achievements",
      desc: "Earn industry-recognized certificates and boost your profile with every course you complete.",
      buttons: [
        {
          label: "Earn a Certificate",
          link: "/my-enrollments",
          type: "primary",
          icon: "certificate",
        },
        { label: "See Success Stories", type: "secondary", icon: "trophy" },
      ],
      bgImage: banner4,
    },
  ];

  // Icon mapping
  const getIcon = (iconName) => {
    const icons = {
      book: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      "user-tie": (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      clock: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      tags: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ),
      star: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      "mobile-alt": (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      certificate: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      trophy: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    };
    return icons[iconName] || null;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden"
    >
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div
              className="w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

              {/* Content */}
              <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-20 text-white flex flex-col justify-center min-h-[500px]">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-3xl md:text-5xl font-bold leading-tight"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-4 md:mt-6 text-base md:text-lg text-gray-200 max-w-2xl"
                >
                  {slide.desc}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4"
                >
                  {slide.buttons.map((btn, i) =>
                    btn.link ? (
                      <Link to={btn.link} key={i}>
                        <button
                          className={`${
                            btn.type === "primary"
                              ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
                              : "border border-white bg-transparent hover:bg-white/10 text-white"
                          } font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                        >
                          {getIcon(btn.icon)}
                          {btn.label}
                        </button>
                      </Link>
                    ) : (
                      <button
                        key={i}
                        onClick={() =>
                          btn.scrollRef && handleScroll(btn.scrollRef)
                        }
                        className={`${
                          btn.type === "primary"
                            ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
                            : "border border-white bg-transparent hover:bg-white/10 text-white"
                        } font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                      >
                        {getIcon(btn.icon)}
                        {btn.label}
                      </button>
                    )
                  )}
                </motion.div>

                {/* Extra Content (Stats) */}
                {slide.extraContent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    {slide.extraContent}
                  </motion.div>
                )}
              </div>

              {/* Scroll Indicator */}
              <ScrollIndicator scrollToRef={() => handleScroll(latestRef)} />
            </div>
          </div>
        ))}
      </Slider>
    </motion.section>
  );
};

export default Banner;
