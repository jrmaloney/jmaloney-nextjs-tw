import React from "react";

interface BandcampEmbedProps {
  embeds: string[]; // Array of Bandcamp iframe URLs
}

const BandcampEmbed: React.FC<BandcampEmbedProps> = ({
  embeds,
}) => {
  return (
    <section className=" text-left ">
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
    </section>
  );
};

export default BandcampEmbed;
