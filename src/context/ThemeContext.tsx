'use client';

import { ReactNode, createContext, useState } from 'react';

type ThemeContextType = {
	mode: string;
	toggleMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
	mode: 'dark',
	toggleMode: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [mode, setMode] = useState('dark');
	const toggleMode = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	return (
		<ThemeContext.Provider value={{ mode, toggleMode }}>
			<div
				// className={`${
				// 	mode === 'dark'
				// 		? 'bg-black text-[#bbbbbb]'
				// 		: 'bg-white text-[#111]'
				// }`}
				// className="bg-black text-white"
				className={`theme ${mode}`}
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};
