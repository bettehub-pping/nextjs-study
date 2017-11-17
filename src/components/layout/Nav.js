import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <div>
    <nav id="menu">
      <div className="pure-menu">
        <Link href="/">
          <a className="pure-menu-heading">Home</a>
        </Link>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <Link href="/about">
              <a className="pure-menu-link">About</a>
            </Link>
          </li>
          <li className="pure-menu-item">
            <Link href="/movie">
              <a className="pure-menu-link">Movie</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Nav;
