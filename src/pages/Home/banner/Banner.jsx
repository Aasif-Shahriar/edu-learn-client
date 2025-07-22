import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router";
import banner1 from '../../../assets/images/banner1.jpg'
import banner2 from '../../../assets/images/banner2.jpg'
import banner3 from '../../../assets/images/banner3.jpg'
import banner4 from '../../../assets/images/banner4.jpg'

const Banner = ({ categoryRef, latestRef, featuredRef }) => {
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const slides = [
    {
      title: "Advance Your Career With Expert-Led Courses",
      desc: "Learn the most in-demand skills from industry experts and transform your career path today.",
      buttons: [
        { label: "Explore Courses", link: "/courses", type: "primary" },
        {
          label: "Become an Instructor",
          link: "/add-course",
          type: "secondary",
        },
      ],
      bgImage: banner1
    },
    {
      title: "Master New Skills at Your Own Pace",
      desc: "Access over 1000+ courses taught by expert instructors with self-paced learning options.",
      buttons: [
        { label: "Latest Course", scrollRef: latestRef, type: "primary" },
        { label: "View Categories", scrollRef: categoryRef, type: "secondary" },
      ],
      bgImage: banner2
    },
    {
      title: "Learn From Anywhere, Anytime You Want",
      desc: "Enjoy the flexibility of online learning with 24/7 access to your courses on any device.",
      buttons: [
        { label: "Popular Courses", scrollRef: featuredRef, type: "primary" },
        { label: "Learn on the Go", type: "secondary" },
      ],
      bgImage: banner3
    },
    {
      title: "Get Certified & Showcase Your Achievements",
      desc: "Earn industry-recognized certificates and boost your profile with every course you complete.",
      buttons: [
        {
          label: "Earn a Certificate",
          link: "/my-enrollments",
          type: "primary",
        },
        { label: "See Success Stories", type: "secondary" },
      ],
      bgImage: banner4
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div
              className="w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 py-20 text-white flex flex-col justify-center min-h-[500px]">
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
                              ? "bg-white text-[#332c91] hover:bg-gray-200"
                              : "border border-white bg-transparent hover:bg-white/10 text-white"
                          } font-medium py-3 px-6 rounded-md transition`}
                        >
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
                            ? "bg-white text-[#332c91] hover:bg-gray-200"
                            : "border border-white bg-transparent hover:bg-white/10 text-white"
                        } font-medium py-3 px-6 rounded-md transition`}
                      >
                        {btn.label}
                      </button>
                    )
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </motion.section>
  );
};

export default Banner;
