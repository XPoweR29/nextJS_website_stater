'use client';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { linksMap } from '@/assets/data/linksMap';
import { useHomeScrollTop } from '@/hooks/useHomeScrollTop';

export const Nav = () => {
	const handleScrollTop = useHomeScrollTop();

	return (
		<nav>
			<ul className={styles.linkbar}>
				{linksMap.map((link) => (
					<li key={link.id} className={styles.menuItem}>
						<Link href={link.href} className={`${styles.link} ${link.id==='contact'?styles.button:''}`} onClick={link.id==='home'?handleScrollTop:undefined}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
