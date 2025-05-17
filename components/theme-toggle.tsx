'use client';
import { Moon,Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function Themetoggle(){
const { theme, setTheme } = useTheme(); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
   <>
   {mounted && (
        <button className="border p-2 rounded-full" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? (
            <Moon size={20}  />
          ) : (
            <Sun size={20} />
          )}
        </button> )}
   </>
  
  );
}