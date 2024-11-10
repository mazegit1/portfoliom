// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer text-black bg-white p-6 sm:p-8">
      <div className="footer-top text-center mb-8">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-9xl mt-16 sm:mt-32 font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's talk!
        </motion.h1>
        <motion.a
          href="mailto:mazegitt@gmail.com"
          className="text-2xl sm:text-3xl lg:text-4xl bg-black text-white px-6 py-2 rounded-3xl hover:underline"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          mazegitt@gmail.com
        </motion.a>
      </div>
      
      <div className="footer-bottom flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 text-xl pt-4">
        <motion.div
          className="footer-left text-xl sm:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>2023 © — Made by Mazegit</h1>
        </motion.div>
        
        <motion.div
          className="footer-right items-center flex gap-4 sm:gap-6 mt-4 sm:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.a
            href="https://www.instagram.com/xelil_ovw/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-3xl sm:text-2xl"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/huseyn-xalil-7022262bb/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-3xl sm:text-2xl"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="tel:055-688-15-00"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-3xl sm:text-2xl flex items-center gap-2"
          >
            <span>Phone Me</span>
            
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
