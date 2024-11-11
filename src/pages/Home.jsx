import React, { useState, useEffect } from 'react';
import { FaAnglesDown } from "react-icons/fa6";
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const [showHeroBottom, setShowHeroBottom] = useState(false);

  // Check scroll position to reveal hero bottom section
  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = document.querySelector('.hero-bottom');
      if (heroBottom.getBoundingClientRect().top < window.innerHeight) {
        setShowHeroBottom(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="hero text-black">
        {/* Hero Top */}
        <div className="hero-top text-center my-10">
          <motion.h1
            className="text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Huseyn Khalil
          </motion.h1>
        </div>

        {/* Hero Bottom */}
        <h1 className="text-[100px] leading-[80px] text-center py-12 sm:py-24 lg:py-48 sm:text-[250px] md:text-[250px] sm:leading-[180px]">
          Websites & <br />
          Branding
        </h1>
        <motion.div
          className={`hero-bottom ${showHeroBottom ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          initial={{ opacity: 0 }}
          animate={{ opacity: showHeroBottom ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bottom flex flex-col sm:flex-row items-center justify-center gap-10 px-8 sm:px-16 lg:px-56">
            {/* Left Section */}
            <motion.div
              className="left flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:w-1/2"
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: showHeroBottom ? 0 : '-100%', opacity: showHeroBottom ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-xl sm:text-6xl mb-4">Let's Talk</h1>
              <a
                href="mailto:mazegitt@gmail.com"
                className="text-lg sm:text-xl hover:text-blue-600 transition duration-300"
              >
                mazegitt@gmail.com
              </a>
              <button
                onClick={() => scrollToSection('nextSection')}
                className="text-lg sm:text-xl flex items-center gap-2  bg-black rounded-3xl px-4 py-2 text-white hover:bg-gray-300 hover:text-black  ease-in-out transition duration-300 mt-4"
              >
                Scroll Down <FaAnglesDown />
              </button>
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="right flex-1 sm:text-lg text-gray-800 w-full sm:w-1/2"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: showHeroBottom ? 0 : '100%', opacity: showHeroBottom ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-lg sm:text-xl leading-relaxed">
                <span className='text-4xl'>Hello</span>, I’m <span className='text-4xl'>Huseyn Khalil</span>, a junior front-end developer based in Baku, Azerbaijan.<br />
                I specialize in creating modern, minimalistic, and bold digital experiences with a strong focus on functionality and aesthetics.<br />
                My design approach leans toward brutalism and simplicity, bringing a sharp, clean edge to every project.<br />
                Passionate about the art of code and the impact of design, I’m constantly evolving and exploring new ways to make the web visually compelling and intuitively usable.
              </p>
            </motion.div>
          </div>
        </motion.div>       
        <Projects />
        <Testimonials/>
        <div id="nextSection" className="projects text-black p-8">
       
      </div>
      </div>
     
    </>
  );
};

export default Home;
