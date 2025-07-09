'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

import { useHeaderBehavior } from '@/hooks/useHeaderBehavior';
import { useAppContext } from '@/hooks/useAppContext';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { useBreakpoints } from '../../hooks/useBreakpoint';
import { Nav } from '../Nav/Nav';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Wrapper } from '../Wrapper/Wrapper';

import logo from '../../assets/images/logo.png';
import { useHomeScrollTop } from '@/hooks/useHomeScrollTop';

export const Header = () => {
	const { breakpoint } = useBreakpoints();
	const { mobileMenuShown, setMobileMenuShown } = useAppContext();
	const { showNav } = useHeaderBehavior({ scrollHide: true });
	
	const handleScrollTop = useHomeScrollTop();

	return (
		<header
			className={`${styles.header} ${
				mobileMenuShown ? styles['activeMobileMenu'] : ''
			} ${!showNav ? styles['header--hidden'] : ''}`}
			>
			<Wrapper>
				<div className={styles.navbar_container}>
					<Link
						href={'/'}
						className={styles.logo}
						onClick={handleScrollTop}
						aria-label='Strona startowa'
						rel='preload'>
						<Image
							src={logo}
							width={250}
							height={52}
							alt=''
							priority
						/>
					</Link>

					{breakpoint.lg ? (
						<Nav />
					) : (
						<BurgerBtn
							className={styles.burgerBtn}
							mobileMenuShown={mobileMenuShown}
							toggleMenu={setMobileMenuShown}
						/>
					)}

					{mobileMenuShown && <MobileMenu />}
				</div>
			</Wrapper>
		</header>
	);
};
