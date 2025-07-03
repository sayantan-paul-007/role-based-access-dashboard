'use client';

import { createContext, useContext, useEffect, useState } from 'react';


type User = {
  username: string;
  role: string;
  imageURL: string;
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
  async function fetchUser() {
    try {
      const res = await fetch('/api/me');
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
    }
  }
  fetchUser();
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
