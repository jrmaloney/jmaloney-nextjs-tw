import React from "react";

interface HeroBannerProps {
    title: string;
    teaser: React.ReactNode;
    shortDesc?: React.ReactNode;
    longDesc: React.ReactNode;
  }

  const HeroBanner: React.FC<HeroBannerProps> = ({ title, teaser, shortDesc, longDesc }) => {
  return (
    <section className=" py-4 px-8 text-left ">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg font-medium opacity-90 mb-2">{teaser}</p>
        {shortDesc && (
          <p className="text-lg font-medium opacity-90 mb-2">{shortDesc}</p>
        )}
        <p className="text-lg opacity-90">{longDesc}</p>
      </div>
    </section>
  );
};

export default HeroBanner;