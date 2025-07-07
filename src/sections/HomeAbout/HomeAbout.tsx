import React from 'react';
import styles from './HomeAbout.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { ReviewSwiper } from '@/components/ReviewSwiper/ReviewSwiper';
import { Gallery } from '@/components/Gallery/Gallery';

import img1 from '../../assets/gallery/photo_1.jpg';
import img2 from '../../assets/gallery/photo_2.jpg';
import img3 from '../../assets/gallery/photo_3.jpg';
import img4 from '../../assets/gallery/photo_1.jpg';
import img5 from '../../assets/gallery/photo_2.jpg';
import img6 from '../../assets/gallery/photo_3.jpg';
import img7 from '../../assets/gallery/photo_1.jpg';
import img8 from '../../assets/gallery/photo_2.jpg';
import img9 from '../../assets/gallery/photo_3.jpg';
import img10 from '../../assets/gallery/photo_1.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export const HomeAbout = () => {
	return (
		<section className={styles.section} id='about'>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>Get know sth about!</h2>
				<p className={styles.text} style={{marginBottom: '2em'}}>
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

				<h2 className={styles.heading} style={{textAlign: 'right', marginTop: '5em'}}>Just look on this!</h2>
				<p className={styles.text} style={{textAlign:"right", maxWidth: '70%', marginLeft: "auto", marginBottom: '2em'}}>
					Et molestiae architecto sit totam nobis ipsam voluptates, error,
					accusantium eveniet tempora numquam maiores sunt autem fugit nihil
					iusto quod, similique facere alias voluptas dolores. Cupiditate quas
					exercitationem asperiores accusantium?
				</p>

				<Gallery images={images}/>
			</Wrapper>
		</section>
	);
};
