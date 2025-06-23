"use client"

import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { AppContextType } from '../types/appContext.type';

export const AppContext = createContext<AppContextType | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [mobileMenuShown, setMobileMenuShown] = useState(false);
	const [breakpoint, setBreakpoint] = useState<Breakpoints>({
		sm: false,
		md: false,
		lg: false,
		xl: false,
		xxl: false,
	});

	useEffect(() => {
		const handleResize = () => {
			setBreakpoint({
				sm: window.innerWidth >= 576,
				md: window.innerWidth >= 768,
				lg: window.innerWidth >= 992,
				xl: window.innerWidth >= 1200,
				xxl: window.innerWidth >= 1400,
			});
		};
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// declare type for all these vars in AppContextType!
	const contextValues = {
		breakpoint,
		mobileMenuShown,
		setMobileMenuShown,
	};

	return (
		<AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
	);
};
