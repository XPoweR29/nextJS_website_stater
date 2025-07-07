import React from 'react';
import styles from './ContactStart.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';

export const ContactStart = () => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<h1 className={styles.heading}>Contact with Us!</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos
					doloremque atque tempora vel nemo nisi, aspernatur architecto aperiam
					ipsam nulla, molestias temporibus veniam natus.
				</p>
			</Wrapper>
		</section>
	);
};
