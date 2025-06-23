import React from 'react';
import styles from './HomeStart.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { linkHref } from '@/utils/linkHref.helper';

export const HomeStart = async () => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<h1 className={styles.heading}>
					Welcome WebCraftSTUDIO's initial project
				</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
					temporibus itaque aliquam minima ad. Perferendis incidunt consequuntur
					numquam non quaerat eveniet minima nemo beatae temporibus ea,
					doloribus commodi illum soluta ipsam totam odio recusandae voluptates
					nam esse! Illo, quod est.
				</p>

				<a href={linkHref('about')} className={styles.button}>
					Read more ➞
				</a>
			</Wrapper>
		</section>
	);
};
