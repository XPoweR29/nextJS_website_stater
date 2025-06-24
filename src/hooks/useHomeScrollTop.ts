'use client';

import { usePathname } from 'next/navigation';

export const useHomeScrollTop = () => {
	const pathname = usePathname();

	const scrollTopIfHome = (e: React.MouseEvent) => {
		if (pathname === '/') {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	return scrollTopIfHome;
};
