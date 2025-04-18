import React from 'react';
import HeroBanner from '@/components/HeroBanner';

const HomePage = () => {

  return (
    <div className="container mx-auto p-8">
      <HeroBanner 
        title="Welcome to My Personal Website" 

        teaser={
          <>I&apos;m an enterprise architect, builder of digital solutions, and part time musician from the Boston area. 
        </>
        }
        longDesc={
          <>There&apos;s nothing Earth shattering going on here, just a site I use to test out new ideas and to put some of my work out into the world. I hope you enjoy it!</>
        }
        
        
      />
    </div>
  );
};

export default HomePage;