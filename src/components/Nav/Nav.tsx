'use client';
import styles from './Nav.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '../../config/site.config';
import { linksMap } from '@/assets/data/linksMap';

export const Nav = () => {
	return (
		<nav>
			<ul className={styles.linkbar}>
				{linksMap.map((link) => (
					<li key={link.id} className={styles.menuItem}>
						<Link href={link.href} className={`${styles.link} ${link.id==='contact'?styles.button:''}`}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
