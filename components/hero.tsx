import React from "react";

const HeroBanner = ({ title, description }) => {
  return (
    <section className=" py-4 px-8 text-left ">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg opacity-90">{description}</p>
      </div>
    </section>
  );
};

export default HeroBanner;