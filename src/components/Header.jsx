// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <>
      <div
        className="header flex shadow-2xl flex-row rounded-[200px] text-white px-1 py-1 fixed bg-black w-fit sm:w-min items-center my-4 sm:my-20 transition-all ease-in-out duration-200 gap-4"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        <a
          className="bg-white rounded-[200px] text-black hover:bg-black hover:text-white px-6 py-2 text-2xl sm:text-4xl transition-all ease-in-out duration-200"
          href="/"
        >
          Home
        </a>
        <a
          className="bg-black rounded-[200px] text-white hover:bg-white hover:text-black px-6 py-2 text-2xl sm:text-4xl transition-all ease-in-out duration-200"
          href="/projects"
        >
          Projects
        </a>
        <a
          className="bg-black rounded-[200px] text-white hover:bg-white hover:text-black px-6 py-2 text-2xl sm:text-4xl transition-all ease-in-out duration-200"
          href="/about"
        >
          About
        </a>
        <a
          className="bg-black rounded-[200px] text-white hover:bg-white hover:text-black px-6 py-2 text-2xl sm:text-4xl transition-all ease-in-out duration-200"
          href="/contact"
        >
          Contact
        </a>
      </div>
    </>
  );
}

export default Header;
