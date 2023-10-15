import Navbar from '@/components/Navbar';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const HomePage: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (!user) {
    router.push('/');
  }

  return (
    <div>
      <Navbar isLoggedIn={!!user} />
      <h1>Welcome to the Home Page</h1>
      <p>This is a basic home page component.</p>
    </div>
  );
};

export default HomePage;
