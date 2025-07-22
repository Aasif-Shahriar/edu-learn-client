import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
        <title>About - EduLearn</title>
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <img
          src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"
          alt="About Illustration"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-700 mb-4">
            At <strong>EduLearn</strong>, we believe in transforming the way
            people learn. Our platform provides a space where learners of all
            levels can access high-quality, curated courses created by
            passionate educators around the world.
          </p>
          <p className="text-gray-700">
            Whether you're just getting started or looking to master a new
            skill, we’ve designed our system to be flexible, user-friendly, and
            secure. Empower your learning journey with us.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
