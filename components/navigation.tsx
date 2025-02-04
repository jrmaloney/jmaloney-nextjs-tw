import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-300">
            John R. Maloney
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/code" className="hover:text-gray-300">
            Code
          </Link>
          <Link href="/music" className="hover:text-gray-300">
            Music
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;