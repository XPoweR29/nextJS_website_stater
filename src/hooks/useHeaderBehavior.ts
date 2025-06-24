import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useAppContext } from './useAppContext';

interface HeaderBehaviorOptions {
	scrollHide?: boolean;
	changeColorOnScroll?: boolean;
	scrollThreshold?: number;
	fixedColor?: string; 
	defaultColor?: string; 
}

export const useHeaderBehavior = ({
	scrollHide = false,
	changeColorOnScroll = false,
	scrollThreshold = 100,
	fixedColor = 'lightgray',
	defaultColor = 'transparent',
}: HeaderBehaviorOptions = {}) => {
	const pathname = usePathname();
	const prevScrollPos = useRef(0);
	const firstLoad = useRef(true);

	const [showNav, setShowNav] = useState(true);
	const [bgColor, setBgColor] = useState<string>(defaultColor);

	useEffect(() => {
		firstLoad.current = true;
		prevScrollPos.current = 0;

		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (scrollHide) {
				if (firstLoad.current || prevScrollPos.current > currentScrollPos) {
					setShowNav(true);
				} else {
					setShowNav(false);
				}
			} else {
				setShowNav(true);
			}

			if (changeColorOnScroll) {
				if (
					currentScrollPos > scrollThreshold ||
					pathname === '/polityka-prywatnosci'
				) {
					setBgColor(fixedColor);
				} else {
					setBgColor(defaultColor);
				}
			} else {
				setBgColor(defaultColor);
			}

			prevScrollPos.current = currentScrollPos;
			firstLoad.current = false;
		};

		requestAnimationFrame(handleScroll);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [
		scrollHide,
		changeColorOnScroll,
		scrollThreshold,
		fixedColor,
		defaultColor,
		pathname,
	]);

	return { showNav, bgColor };
};
