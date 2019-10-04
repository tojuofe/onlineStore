import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper white ">
        <a href="#!" className="brand-logo black-text ">
          <i className="material-icons"></i> Title
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">
              <input placeholder="Try Hiking in the Tatras" type="text" />
            </Link>
          </li>
          <li>
            <a href="badges.html">
              <i className="material-icons right black-text">email</i>
            </a>
          </li>

          <li>
            <a href="!#">
              <i className="material-icons right black-text">notifications</i>
            </a>
          </li>
          <li>
            <a href="!#">
              <i className="material-icons right black-text">favorite</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
