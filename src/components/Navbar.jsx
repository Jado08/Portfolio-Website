import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-yellow-200 text-gray-800 p-3 w-full fixed top-0 left-0 z-10">
      <ul className="flex justify-end space-x-8">
        <li>
          <Link to="/" className="font-medium hover:text-gray-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/resume" className="font-medium hover:text-gray-600">
            Resume
          </Link>
        </li>
        <li>
          <Link to="/certificates" className="font-medium hover:text-gray-600">
            Certificates
          </Link>
        </li>
        <li>
          <Link to="/projects" className="font-medium hover:text-gray-600">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
