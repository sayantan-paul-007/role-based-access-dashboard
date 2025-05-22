'use client';

import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    document.cookie = "token=; Max-Age=0; path=/";
    window.location.href = '/login';
  };

  return <button onClick={handleLogout}><LogOut /> Logout</button>;
}
