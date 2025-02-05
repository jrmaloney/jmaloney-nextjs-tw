import React from 'react';
import HeroBanner from '@/components/hero';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <HeroBanner 
        title="A Little About Me" 
        shortDesc="I live in Weymouth, MA with my amazing fiancee, Abby and her surly cat Big Lady. We're getting married soon!"
        longDesc="I'm a Boston transplant from Western PA. I grew up about an hour and a half south of Buffalo, NY in the heart of the snow belt."
      />
    </div>
  );
};

export default AboutPage;