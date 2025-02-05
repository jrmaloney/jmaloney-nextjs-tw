import React from "react";

const Footer = () => {
    return (
      <footer className="bg-[#d2cebc] text-[#3b3b3b] p-4 shadow-md mt-8 w-full">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} jmaloney.net -- All rights reserved.</p>
        </div>
      </footer>
    );
  };

export default Footer;


