import React from 'react';

const HeaderEasy = () => {
  return (
    <>
      <header className='header-easy'>
        <a href='#'>
          <img
            className='logo '
            src='https://assets.codepen.io/296057/fem-maglime-logo.svg'
            alt='Magenta Lime. Click for home.'
          />
        </a>
      </header>
      <div className='banner'>
        <img
          src='https://assets.codepen.io/296057/fem-blindfold-475.jpg'
          alt='3 men of Magenta Lime.'
        />
      </div>
    </>
  );
};

export default HeaderEasy;
