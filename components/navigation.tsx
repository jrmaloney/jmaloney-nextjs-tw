import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#d2cebc] text-[#3b3b3b] p-4  w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:underline">
            John R. Maloney
          </Link>
        </div>
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>
        <div className="flex space-x-4">
          <Link href="/about">
            <span className="hover:underline">About</span>
          </Link>
          <Link href="/code">
            <span className="hover:underline">Code</span>
          </Link>
          <Link href="/music">
            <span className="hover:underline">Music</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;