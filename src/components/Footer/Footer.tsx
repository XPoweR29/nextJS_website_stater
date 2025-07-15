'use client';

import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { Wrapper } from '../Wrapper/Wrapper';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import { siteConfig } from '@/config/site.config';
import { useHomeScrollTop } from '@/hooks/useHomeScrollTop';

import dev_logo from '../../assets/images/dev_logo.svg';
import logo from '../../assets/images/logo_white.png';
import { linkHref } from '@/utils/linkHref.helper';
import { useCookieContext } from '@/hooks/useCookieContext';

export const Footer = () => {
	const { setShowBanner } = useCookieContext();
	const currentYear = new Date().getFullYear();
	const handleScrollTop = useHomeScrollTop();

	return (
		<footer className={styles.footer}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.col1}>
					<Link
						href={'/'}
						className={styles.logo}
						rel='preload'
						onClick={handleScrollTop}
						aria-label='Strona główna'>
						<Image src={logo} alt='' priority={true} />
					</Link>
					<p>Professional Frontend Starter for Developers</p>
				</div>

				<address className={styles.col2}>
					<a
						href={`tel:${siteConfig.contact.phoneHref}`}
						className={styles.link}>
						<Icon icon='majesticons:phone' />
						{`+48 ${siteConfig.contact.phone}`}
					</a>

					<a
						href={`mailto:${siteConfig.contact.email}`}
						className={styles.link}>
						<Icon icon='f7:envelope-fill' />
						{siteConfig.contact.email}
					</a>

					<a
						href={siteConfig.externalLinks.facebook!}
						className={styles.link}
						target='_blank'
						rel='noopener noreferrer'>
						<Icon icon='ic:round-facebook' />
						/facebook
					</a>
				</address>

				<div className={styles.col3}>
					<Link href={linkHref('contact')} className={styles.link}>
						Kontakt
					</Link>
					<Link href={linkHref('policy')} className={styles.link}>
						Polityka prywatności
					</Link>
					<button type='button' className={styles.link} onClick={()=>setShowBanner(true)}>Ustawienia plików cookies</button>

					<p className={styles.copyright}>
						<span>© {currentYear} {siteConfig.siteName}</span>
						<span>All rights reserved.</span>
					</p>
				</div>
			</Wrapper>

			<div className={styles.dev_sign}>
				<p>Designed & Developed by</p>
				<a
					href='https://webcraft-studio.pl/'
					target='_blank'
					aria-label='strona webcraft-studio'
					title='Zamów własną stronę internetową!'
					rel='noopener noreferrer'>
					<Image
						src={dev_logo}
						alt='Logo Webcraft Studio – profesjonalne projektowanie stron'
					/>
				</a>
			</div>
		</footer>
	);
};
