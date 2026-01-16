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
      className="btn-muted no-print"
    >
        {buttonLabel} 
    </button>
  );
};

export default DownloadButton;
