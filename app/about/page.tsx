import React from 'react';
import HeroBanner from '@/components/hero';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <HeroBanner 
        title="A Little About Me" 
        longDesc="I live in Weymouth, MA with my amazing fiancee, Abby and her surly cat Big Lady. We're getting married soon!"
      />
    </div>
  );
};

export default AboutPage;