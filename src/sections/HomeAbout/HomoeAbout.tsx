import React from 'react';
import styles from './HomeAbout.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { ReviewSwiper } from '@/components/ReviewSwiper/ReviewSwiper';

export const HomoeAbout = () => {
	return (
		<section className={styles.section} id='about'>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>Get know sth about!</h2>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa harum
					quasi officiis porro ducimus! Corrupti, sapiente doloremque nihil
					dolorem nulla, laborum eaque non repudiandae tempore deleniti
					aspernatur optio, facere dicta. Et molestiae architecto sit totam
					nobis ipsam voluptates, error, accusantium eveniet tempora numquam
					maiores sunt autem fugit nihil iusto quod, similique facere alias
					voluptas dolores. Cupiditate quas exercitationem asperiores
					accusantium?
				</p>
        
				<ReviewSwiper />
			</Wrapper>
		</section>
	);
};
