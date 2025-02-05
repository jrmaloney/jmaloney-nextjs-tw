import React from 'react';
import HeroBanner from '@/components/hero';

const MusicPage = () => {
  return (
    <div className="container mx-auto p-8">
      <HeroBanner 
        title="Play that Funky Music" 
        description="Actually, I've never been accused of being funky but I do like playing music and can hold down a decent groove."
      />
    </div>
  );
};

export default MusicPage;