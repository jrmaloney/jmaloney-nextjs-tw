import React from 'react';
import HeroBanner from '@/components/HeroBanner';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <HeroBanner 
        title="A Little About Me" 
        teaser={
          <>
            I live in Weymouth, MA, with my amazing wife, Abby, and her surly cat, Big Lady.
          </>
        }
        longDesc={
          <>
            I&apos;m a Boston transplant from Western PA. I grew up about an hour and a half south of Buffalo, NY, in the heart of the Snow Belt.
          </>
        }
      />
    </div>
  );
};

export default AboutPage;