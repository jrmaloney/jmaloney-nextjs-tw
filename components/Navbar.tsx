"use client"
import React, { useState }  from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#d2cebc] text-[#3b3b3b] p-4 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:underline">
            John R. Maloney
          </Link>
        </div>
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none"
          >
            &#9776;
          </button>
          {isOpen && (
            <div className="absolute right-4 mt-2 w-40 bg-[#d2cebc] text-[#3b3b3b] rounded-md shadow-lg z-10">
              <Link href="/about" onClick={handleLinkClick}>
                <span className="block px-4 py-2 hover:bg-gray-300">About</span>
              </Link>
              <Link href="/tech" onClick={handleLinkClick}>
                <span className="block px-4 py-2 hover:bg-gray-300">Tech</span>
              </Link>
              <Link href="/music" onClick={handleLinkClick}>
                <span className="block px-4 py-2 hover:bg-gray-300">Music</span>
              </Link>
              <Link href="/resume" onClick={handleLinkClick}>
                <span className="block px-4 py-2 hover:bg-gray-300">Resume</span>
              </Link>
            </div>
          )}
        </div>
        <div className="hidden md:flex md:space-x-4">
          <Link href="/about">
            <span className="hover:underline">About</span>
          </Link>
          <Link href="/tech">
            <span className="hover:underline">Tech</span>
          </Link>
          <Link href="/music">
            <span className="hover:underline">Music</span>
          </Link>
          <Link href="/resume">
            <span className="hover:underline">Resume</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;