import React from "react";

const Footer = () => {
    return (
      <footer className="bg-surface-muted text-ink p-4 shadow-md mt-8 w-full">
        <div className="site-container text-center">
          <p>&copy; {new Date().getFullYear()} jmaloney.net -- All rights reserved.</p>
        </div>
      </footer>
    );
  };

export default Footer;

