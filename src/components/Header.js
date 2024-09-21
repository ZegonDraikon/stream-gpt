import React from 'react';

const Header = () => {
  return (
    <div style={{ padding: '20px', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
      <img
        src="https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.webp"
        alt="logo"
        style={{ height: '50px' }} 
      />
    </div>
  );
};

export default Header;
