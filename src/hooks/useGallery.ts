import { StaticImageData } from 'next/image';
import { useMemo } from 'react';

export const useGallery = (images: StaticImageData[]) => {
	const slides = useMemo(
		() => images.map((img) => ({ src: img.src })),
		[images]
	);

	return { slides };
};
