import React from 'react'
import useDarkMode from './useDarkMode'
import { BiMoon } from 'react-icons/bi';
import { GoSun } from 'react-icons/go';

export default function DarkToggle() {
    const [isDarkMode, setIsDarkMode] = useDarkMode();

    return (
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300"
        >
            {isDarkMode ? <GoSun     className="w-6 h-6 text-yellow-500" /> : <BiMoon className="w-6 h-6 text-gray-900" />}
        </button>
    )
}
