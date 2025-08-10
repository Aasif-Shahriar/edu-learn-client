import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaLaptopHouse,
  FaCertificate,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaHeadset,
  FaMoneyBillWave,
} from "react-icons/fa";

const Service = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-3xl" />,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of real-world experience and proven teaching methods.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <FaLaptopHouse className="text-3xl" />,
      title: "Learn Anywhere",
      description:
        "Access courses on any device, anytime. Our platform is optimized for learning on the go.",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "Verified Certificates",
      description:
        "Earn industry-recognized certificates upon completion to showcase your new skills.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Active Community",
      description:
        "Join thousands of learners in discussion forums and study groups to enhance your learning.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Self-Paced Learning",
      description:
        "Learn at your own pace with lifetime access to course materials and updates.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Practical Projects",
      description:
        "Apply your knowledge with hands-on projects that build your portfolio and skills.",
      color: "from-rose-500 to-red-600",
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "24/7 Support",
      description:
        "Get help whenever you need it with our dedicated support team available around the clock.",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl" />,
      title: "Affordable Pricing",
      description:
        "Access high-quality education at competitive prices with flexible payment options.",
      color: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <section id="why-choose-us">
      <div className="w-full">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose EduLearn?
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We provide the best learning experience with our unique features and
            dedicated support.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`p-6 bg-gradient-to-r ${feature.color} text-white`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="text-4xl font-bold opacity-20">
                    {index + 1}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "15K+", label: "Online Courses" },
              { value: "9M+", label: "Active Students" },
              { value: "5K+", label: "Expert Instructors" },
              { value: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <motion.div
                  className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
