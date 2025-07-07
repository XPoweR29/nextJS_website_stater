'use client';

import React from 'react';
import styles from './ContactNap.module.scss';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Wrapper } from '../Wrapper/Wrapper';
import { ContactForm } from '../ContactForm/ContactForm';
import { siteConfig } from '@/config/site.config';

interface Props {
	className?: string;
}
export const ContactNap = ({ className }: Props) => {
	return (
		<section className={`${styles.section} ${className}`}>
			<Wrapper className={styles.wrapper}>
				<address>
					<ul className={styles.napContainer}>
						<li className={styles.napItem}>
							<a
								href={`tel:${siteConfig.contact.phoneHref}`}
								aria-label='Zadzwoń do nas'>
								<Icon
									className={styles.icon}
									icon='f7:phone-circle-fill'
									aria-hidden={true}
								/>

								<div className={styles.container}>
									<span>+48 {siteConfig.contact.phone}</span>
									<p>Zadzwoń, a udzielimy ci niezbędnych informacji</p>
								</div>
							</a>
						</li>

						<li className={styles.napItem}>
							<a
								href={`mailto:${siteConfig.contact.email}`}
								aria-label='Napisz wiadomość email'>
								<Icon
									className={styles.icon}
									icon='f7:envelope-circle-fill'
									aria-hidden={true}
								/>

								<div className={styles.container}>
									<span>{siteConfig.contact.email}</span>
									<p>Napisz bezpośrednio lub skorzystaj z formularza</p>
								</div>
							</a>
						</li>

						<li className={styles.napItem}>
							<a
								href={siteConfig.socials.facebook!}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Śledź nas na Facebooku'>
								<Icon
									className={styles.icon}
									icon='ri:facebook-circle-fill'
									aria-hidden={true}
								/>

								<div className={styles.container}>
									<span>/facebook</span>
									<p>Śledź nas na socialach, aby być na bieżąco</p>
								</div>
							</a>
						</li>
					</ul>
				</address>

				<ContactForm />
			</Wrapper>
		</section>
	);
};
