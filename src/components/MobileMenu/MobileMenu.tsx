'use client';

import React from 'react';
import styles from './MobileMenu.module.scss';
import Link from 'next/link';
import { useAppContext } from '@/hooks/useAppContext';
import { linksMap } from '@/assets/data/linksMap';

export const MobileMenu = () => {
	const { setMobileMenuShown } = useAppContext();

	const handleClick = () => {
		setTimeout(() => {
			setMobileMenuShown(false);
		}, 10);
	};
	return (
		<nav>
			<ul className={styles.mobileMenu}>
				{linksMap.map((link, i) => (
					<li key={link.id}>
						<Link
							href={link.href}
							className={styles.link}
							style={{animationDelay: `${i*0.15}s`}}
							onClick={handleClick}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
