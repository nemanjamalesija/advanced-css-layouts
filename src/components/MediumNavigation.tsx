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
      <h1>
        <a href='#'>Site Title</a>
      </h1>
      <button type='button' id='mainMenuOpen' tabIndex={-1} hidden></button>
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>FAQ</a>
          </li>
          <li>
            <a href='#'>Tutorial</a>
          </li>
          <li>
            <a href='#'>Links</a>
          </li>
          <li>
            <a href='#'>Forums</a>
          </li>
          <li>
            <a href='#' className='action'>
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MediumNavigation;
