import React from 'react';

const MediumNavigation = () => {
  return (
    //  <!-- following the tutorial at https://medium.com/codex/building-a-more-accessible-and-simpler-hamburger-menu-f6d681a7e671 -- create an accessible hamburger menu, but it's styled the wrong way.

    // Example navbar available at https://codepen.io/jason-knight/pen/yLzqvWv

    // Close button: https://assets.codepen.io/296057/fem-xmark.svg

    // Lime logo: https://assets.codepen.io/296057/fem-maglime-logo-limebolt.svg

    // "Magenta Lime" will be text

    // Hamburger button is in the CSS

    // -->

    <header id='top'>
      <div className='nav-logo'>
        <img
          src='https://assets.codepen.io/296057/fem-maglime-logo-limebolt.svg'
          alt='Magenta lime logo.'
        />

        <h1>
          <a href='#'>Magenta lime</a>
        </h1>
      </div>
      <button type='button' id='mainMenuOpen' tabIndex={-1} hidden></button>
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Tour</a>
          </li>
          <li>
            <a href='#'>Store</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MediumNavigation;
