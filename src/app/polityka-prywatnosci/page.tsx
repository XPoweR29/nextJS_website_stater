import React from 'react';
import styles from './polityka-ptywatnosci.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { createMetadata } from '@/utils/metadata';

const SLUG = 'polityka-prywatnosci';

export const metadata = createMetadata(
	{
		slug: SLUG,
		title: 'Polityka Prywatności',
		description:
			'Dowiedz się, jakie dane zbieramy i w jaki sposób je przetwarzamy.',
	},
	{
		robots: { index: false, follow: false },
	}
);

const PrivacyPolicy = () => {
	return (
		<article className={styles.privacy}>
			<Wrapper className={styles.wrapper}>
				<h1 className={styles.title}>Polityka Prywatności</h1>
			</Wrapper>
		</article>
	);
};

export default PrivacyPolicy;
