import { login, logout } from '@/utils/auth';
import { addUser, isUserIdAlreadyExists } from '@/utils/users-helpers';
import { useRouter } from 'next/router';
import React from 'react';

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const router = useRouter();

  const handleLogin = async () => {
    const result = await login();

    if (!isUserIdAlreadyExists) {
      addUser(
        result.user.uid,
        result.user.displayName.split(' ')[0],
        result.user.displayName.split(' ')[1]
      );
    }
    router.push('/authenticated');
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <nav>
      <ul>
        {isLoggedIn ? (
          <li>
            <button onClick={() => handleLogout()}>Logout</button>
          </li>
        ) : (
          <li>
            <button onClick={() => handleLogin()}>Login</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
