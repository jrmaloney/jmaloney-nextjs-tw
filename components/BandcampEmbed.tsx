import React from "react";

interface BandcampEmbedProps {
  title: string;
  shortDescription: string;
  longDescription?: string;
  embeds: string[]; // Array of Bandcamp iframe URLs
}

const BandcampEmbed: React.FC<BandcampEmbedProps> = ({
  title,
  shortDescription,
  longDescription,
  embeds,
}) => {
  return (
    <section className=" py-4 px-8 text-left ">
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700">{shortDescription}</p>
      {longDescription && <p className="text-gray-600 mt-2">{longDescription}</p>}
      
      <div className="mt-6">
        {embeds.slice(0, 10).map((embed, index) => (
          <iframe
            key={index}
            className="w-full h-12 sm:h-12"
            src={embed}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
    </section>
  );
};

export default BandcampEmbed;
