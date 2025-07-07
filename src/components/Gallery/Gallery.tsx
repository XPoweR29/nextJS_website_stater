'use client';

import Image, { StaticImageData } from 'next/image';
import styles from './Gallery.module.scss';
import Lightbox from 'yet-another-react-lightbox';
import { useGallery } from '@/hooks/useGallery';
import { useState } from 'react';
import 'yet-another-react-lightbox/styles.css';

interface Props {
	images: StaticImageData[];
	alt?: string;
}

export const Gallery = ({ images, alt = 'Obraz galerii' }: Props) => {
	const [index, setIndex] = useState(-1);
	const { slides } = useGallery(images);

	return (
		<>
			<div className={styles.gallery}>
				{images.map((img, i) => (
					<div key={i} className={styles.thumbnail} onClick={() => setIndex(i)}>
						<Image
							src={img}
							alt={`${alt} ${i + 1}`}
							className={styles.image}
							placeholder='blur'
							loading='lazy'
						/>
					</div>
				))}
			</div>

			<Lightbox
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				slides={slides}
			/>
		</>
	);
};
