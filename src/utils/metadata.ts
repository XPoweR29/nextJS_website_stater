import { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

type MetadataBaseParams = {
	title: string;
	description: string;
	slug?: string;
	image?: {
		url: string;
		width?: number;
		height?: number;
		alt?: string;
	};
};

export const createMetadata = (
	base: MetadataBaseParams,
	overrides?: Partial<Metadata>
): Metadata => {
	const { title, description, slug = '/' } = base;

	const fullUrl = `${siteConfig.baseUrl}/${slug.replace(/^\/+/, '')}`;

	const defaultMetadata: Metadata = {
		title,
		description,
		openGraph: {
			title,
			description,
			url: fullUrl,
			siteName: siteConfig.siteName,
			locale: 'pl_PL',
			type: 'website',
			images: [
				{
					url: `${siteConfig.baseUrl}/og_img.jpg`,
					width: 1200,
					height: 630,
					alt: siteConfig.siteName,
				},
			],
		},
		alternates: {
			canonical: fullUrl,
		},
	};

	return {
		...defaultMetadata,
		...overrides,
		openGraph: {
			...defaultMetadata.openGraph,
			...overrides?.openGraph,
		},
		alternates: {
			...defaultMetadata.alternates,
			...overrides?.alternates,
		},
		robots: overrides?.robots,
	};
};
