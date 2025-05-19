'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

type User = {
  name: string;
  email: string;
  role: string;
};

type UserContextType = {
  user: User | null;
  isAuthenticated: boolean;
};

const UserContext = createContext<UserContextType>({
  user: null,
  isAuthenticated: false,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];

    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        setUser({
          name: decoded.name,
          email: decoded.email,
          role: decoded.role,
        });
        console.log('Decoded:', decoded);
      } catch (error) {
        console.error('Error decoding token:', error);
        setUser(null);
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated: !!user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
