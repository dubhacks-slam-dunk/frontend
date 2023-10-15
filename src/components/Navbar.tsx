import { login, logout } from '@/utils/auth';
import { addUser, getUserIdFromUid, isUserIdAlreadyExists } from '@/utils/users-helpers';
import { useRouter } from 'next/router';
import React from 'react';

interface NavbarProps {
  isLoggedIn: boolean;
  userUid: any;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, userUid }) => {
  const router = useRouter();

  const handleLogin = async () => {
    const result = await login();

    const userId = await getUserIdFromUid(userUid);
    const isUserExists = await isUserIdAlreadyExists(userId);

    if (!isUserExists) {
      addUser(
        result.user.uid,
        result.user.photoURL,
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
