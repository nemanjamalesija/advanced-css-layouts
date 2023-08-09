import React from 'react';

const HeaderEasy = () => {
  return (
    <header>
      <div className='banner'>
        <img
          src='https://assets.codepen.io/296057/fem-blindfold-475.jpg'
          alt='3 men of Magenta Lime.'
        />
      </div>
      <a href='#'>
        <img
          src='https://assets.codepen.io/296057/fem-maglime-logo.svg'
          alt='Magenta Lime. Click for home.'
        />
      </a>
      <div className='colors'>
        <div className='lime'></div>
        <div className='magenta'></div>
        <div className='magenta50'></div>
        <div className='white'></div>
        <div className='tan'></div>
        <div className='teal'></div>
        <div className='cyan'></div>
        <div className='black'></div>
      </div>
    </header>
  );
};

export default HeaderEasy;
