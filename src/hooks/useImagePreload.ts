import { useEffect, useState } from 'react';

export const useImagePreload = (src: string) => {
	const [imgLoaded, setImgLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();

		const handleLoad = () => setImgLoaded(true);
		const handleError = () => setImgLoaded(true);

		img.addEventListener('load', handleLoad);
		img.addEventListener('error', handleError);
		img.src = src;

		if(img.complete) setImgLoaded(true);

		return () => {
			img.removeEventListener('load', handleLoad);
			img.removeEventListener('error', handleError);
		};
	}, [src]);

	return imgLoaded;
};
