import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to='/' className='link'>Home</Link>
            <Link to='/poems' className='link'>Poems</Link>
            <Link to='/authors' className='link'>Authors</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/categories' className='link'>Categories</Link>
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
