import React from 'react';
import Navbar from '@/components/navigation';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-10">Hello, World!</h1>
      </main>
    </div>
  );
};

export default HomePage;