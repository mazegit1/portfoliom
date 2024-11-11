import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <>
      {/* Header Section */}
      <div className="ad bg-black text-white text-9xl items-center px-6 flex w-full xl:h-[200px] overflow-hidden">
        <motion.h1
          className="scroll-animation"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Huseyn creates minimalist, visually striking websites designed to captivate and engage users.
        </motion.h1>
      </div>

      {/* Testimonials Section */}
      <div className="testimonial px-6 py-10 md:px-20  bg-white text-black text-center">
        <motion.h1
          className="text-3xl xl:text-7xl md:text-5xl font-semibold mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Testimonials
        </motion.h1>
        <div className="testimonial-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Item 1 */}
          <motion.div
            className="testimonial-item bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="italic text-lg text-black mb-4">
              "Huseyn's web design is exceptional! His attention to detail and user experience makes every project a masterpiece. Highly recommended!"
            </h3>
            <p className="text-sm text-gray-400">- John Doe, CEO at Company X</p>
          </motion.div>

          {/* Testimonial Item 2 */}
          <motion.div
            className="testimonial-item bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="italic text-lg text-black mb-4">
              "The website Huseyn created for us is not only beautiful but also highly functional. Our conversion rate has increased significantly!"
            </h3>
            <p className="text-sm text-gray-400">- Jane Smith, Marketing Director at Brand Y</p>
          </motion.div>

          {/* Testimonial Item 3 */}
          <motion.div
            className="testimonial-item bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="italic text-lg text-black mb-4">
              "Working with Huseyn was a fantastic experience. He listens to your needs and delivers exactly what you envision. Truly a pro!"
            </h3>
            <p className="text-sm text-gray-400">- Alan Brown, Founder at Startup Z</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
