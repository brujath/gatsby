import React from 'react';
import {Link} from 'gatsby';

export const Navbar: React.FC = () => {
  return (
    <div className="yml-navigation">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/careers/">Careers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
