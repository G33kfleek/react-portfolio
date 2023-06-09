import React, { useState } from 'react';
import Cookies from 'js-cookie';
import '../stylesheets/CookieBanner.css';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(!Cookies.get('cookieAccepted'));

  const handleAcceptCookies = () => {
    Cookies.set('cookieAccepted', 'true', { expires: 365 });
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="cookie-banner">
        <p className="cookie-banner-text">
          This website uses cookies to enhance your experience. By continuing to use this site, you consent to the use of
          cookies.
        </p>
        <button className="cookie-banner-button" onClick={handleAcceptCookies}>
          Accept
        </button>
      </div>
    )
  );
};

export default CookieBanner;
