import React, { useEffect, useState } from 'react'
import { BiMoon } from 'react-icons/bi';
import { GoSun } from 'react-icons/go';

export default function DarkModeToggle() {
    const [isDark,setIsDark] = useState(() => {
            if (typeof window !== "undefined") { 
                return localStorage.getItem('theme') === 'dark'
                ||
                (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
            }
        }
    );
    
    useEffect(() => {
        if(isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark')
        }else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','light')
        }   
    },[isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300"
        >
            {isDark ? <GoSun className="w-6 h-6 text-yellow-500" /> : <BiMoon className="w-6 h-6 text-gray-900" />}
        </button>
    )
}
