"use client";
import React from "react";

interface DownloadButtonProps {
  buttonLabel: string;
  href: string;
  downloadName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ buttonLabel, href, downloadName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = href;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 px-4 py-2 bg-[#d2cebc] text-[#3b3b3b] font-bold rounded no-print 
                 hover:bg-[#bfb8a4] hover:text-black cursor-pointer transition duration-300"
    >
        {buttonLabel} 
    </button>
  );
};

export default DownloadButton;
