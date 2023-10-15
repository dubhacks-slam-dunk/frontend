import { login, logout } from '@/utils/auth';
import React from 'react';

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  return (
    <nav>
      <ul>
        {isLoggedIn ? (
          <li>
            <button onClick={() => logout()}>Logout</button>
          </li>
        ) : (
          <li>
            <button onClick={() => login()}>Login</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
