import { createContext, useContext, useEffect, useState } from 'react';
import { provider, auth } from './firebase';
import { onAuthStateChanged, signInWithPopup, getAuth, signOut } from 'firebase/auth';

const AuthContext = createContext({} as any);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: any }) {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  function login() {
      return signInWithPopup(auth, provider);
  };

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log('Auth change detected');
      if (user) {
        // done loading
        setCurrentUser(user);
        setLoading(false);
      } else {
        // done loading
        setCurrentUser(user);
        setLoading(false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        setCurrentUser,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}
