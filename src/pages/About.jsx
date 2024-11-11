import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaCode, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // React Icons

const About = () => {
  return (
    <div className="about-section bg-white text-black px-6 py-56 sm:px-12">
      {/* About Header */}
      <motion.h1
        className="text-4xl font-bold md:text-5xl xl:text-7xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Content Container */}
      <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-2xl mb-6">
            Hi, I'm Huseyn, a passionate front-end developer from Baku, Azerbaijan.
            I specialize in creating minimalist and visually appealing websites with
            an emphasis on clean, user-friendly design and seamless functionality.
            <br /><br />
            I am constantly exploring new technologies and frameworks to ensure that
            my websites are up-to-date with the latest trends. I believe in delivering
            high-quality products that provide exceptional user experiences and drive results.
          </p>
          <p className="text-2xl">
            I have expertise in HTML, CSS, JavaScript, React, and more. Whether it’s
            building responsive layouts or integrating complex functionality, I’m dedicated
            to delivering top-notch solutions tailored to my clients' needs.
          </p>
        </motion.div>

        {/* Right Section with Icons */}
        <motion.div
          className="about-icons grid grid-cols-2 gap-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* React Icon */}
          <div className="icon-container flex flex-col items-center hover:text-[#61dafb] transition duration-300 ease-in-out">
            <FaReact size={60} />
            <p className="text-2xl mt-4">React.js</p>
          </div>

          {/* Code Icon */}
          <div className="icon-container flex flex-col items-center hover:text-[#61dafb] transition duration-300 ease-in-out">
            <FaCode size={60} />
            <p className="text-2xl mt-4">Web Development</p>
          </div>

          {/* Email Icon */}
          <div className="icon-container flex flex-col items-center hover:text-[#61dafb] transition duration-300 ease-in-out">
            <FaEnvelope size={60} />
            <p className="text-2xl mt-4">Email</p>
          </div>

          {/* Phone Icon */}
          <div className="icon-container flex flex-col items-center hover:text-[#61dafb]transition duration-300 ease-in-out">
            <FaPhoneAlt size={60} />
            <p className="text-2xl mt-4">Contact</p>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <motion.div
        className="footer mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h1 className='text-xl'>Feel free to reach out if you want to collaborate or have any questions!</h1>
      </motion.div>
    </div>
  );
};

export default About;
