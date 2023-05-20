import React, { useState } from 'react';
import './footer.css';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            Poetry App
          </div>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/poems">Poems</a>
            <a href="/authors">Authors</a>
            <a href="/categories">Categories</a>
            <a href="/about">About</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2023 Poetry App. All rights reserved.
        </div>
        {showButton && (
          <button className="back-to-top-button" onClick={scrollToTop}>
            Back to Top
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
