import React from "react";

interface ContentSectionProps {
  title: string;
  shortDescription: string;
  longDescription?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  shortDescription,
  longDescription,
}) => {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700">{shortDescription}</p>
      {longDescription && <p className="text-gray-600 mt-2">{longDescription}</p>}
      
    </div>
  );
};

export default ContentSection;
