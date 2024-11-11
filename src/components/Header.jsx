import React, { useState, useEffect } from 'react';

function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Show header after 3 seconds
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 0);

    // Clean up timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    showHeader && (
      <div
      
        className={`header z-10 flex shadow-2xl flex-row rounded-[200px] text-white px-1 py-1 fixed bg-black w-fit sm:w-min items-center transition-all ease-in-out duration-500 gap-4 ${
          scrolled ? 'top-4' : 'top-28'
        }`}
        
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <a
          className="bg-white rounded-[200px] text-black hover:bg-black hover:text-white px-6 py-2 text-xl sm:text-4xl transition-all ease-in-out duration-200"
          href="/"
        >
          Home
        </a>
        <a
          className="bg-black rounded-[200px] text-white hover:bg-white hover:text-black px-6 py-2 text-xl sm:text-4xl transition-all ease-in-out duration-200"
          href="/project"
        >
          Projects
        </a>
        <a
          className="bg-black rounded-[200px] text-white hover:bg-white hover:text-black px-6 py-2 text-xl sm:text-4xl transition-all ease-in-out duration-200"
          href="/about"
        >
          About
        </a>
        <a
          className="bg-black rounded-[200px] text-white hover:bg-white hover:text-black px-6 py-2 text-xl sm:text-4xl transition-all ease-in-out duration-200"
          href="/contact"
        >
          Contact
        </a>
      </div>
    )
  );
}

export default Header;
