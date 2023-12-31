import React from 'react';
import { Link } from 'react-router-dom';  // Import for navigation

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">My Awesome Blog</Link>  </h1>
      <nav>
        <ul>
          <li>
            <Link to="/posts">Posts</Link>  </li>
          <li>
            <Link to="/about">About</Link>  </li>
          <li>
            <Link to="/contact">Contact</Link>  </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
