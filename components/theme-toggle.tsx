'use client';
import { MoonOutlined } from "@/icons/Moon";
import { Sun } from "@/icons/Sun";
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
        <button className="p-2 rounded-full" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? (
            <MoonOutlined fill="bg-foreground" height={28} width={28} />
          ) : (
            <Sun fill="bg-foreground" height={28} width={28} />
          )}
        </button> )}
   </>
  
  );
}