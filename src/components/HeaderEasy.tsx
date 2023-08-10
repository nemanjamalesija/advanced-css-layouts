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
        <picture>
          <source
            srcSet='https://assets.codepen.io/296057/fem-blindfold-1200.jpg'
            media='(min-width: 800px)'
          />
          <img
            src='https://assets.codepen.io/296057/fem-blindfold-475.jpg'
            alt='3 members of Magenta Lime, wearing blindfolds.'
          />
        </picture>
      </div>
    </>
  );
};

export default HeaderEasy;
