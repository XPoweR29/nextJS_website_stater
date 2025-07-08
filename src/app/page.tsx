import { HomeStart } from '@/sections/HomeStart/HomeStart';
import { HomeAbout } from '@/sections/HomeAbout/HomeAbout';
import { siteConfig } from '@/config/site.config';

const schema = {
	'@context': 'https://schema.org',
	'@type': ['WebSite', 'Organization'],
	'@id': `${siteConfig.baseUrl}/#main`,
	url: siteConfig.baseUrl,
	name: siteConfig.siteName,
	alternateName: 'Professional Frontend Starter for Developers',
	description:
		'Kickstart your modern frontend projects with this clean, SEO-friendly, and scalable boilerplate built with Next.js, TypeScript, and SCSS Modules.',
	logo: {
		'@type': 'ImageObject',
		url: `${siteConfig.baseUrl}/logo.jpg`,
		width: 600,
		height: 600,
	},
	image: {
		'@type': 'ImageObject',
		url: `${siteConfig.baseUrl}/og_img.jpg`,
		width: 1200,
		height: 630,
	},
	telephone: siteConfig.contact.phoneHref,
	email: siteConfig.contact.email,
	address: {
		'@type': 'PostalAddress',
		addressLocality: siteConfig.address.city,
		postalCode: siteConfig.address.postalCode,
		addressCountry: 'PL',
	},
	areaServed: [
		{
			'@type': 'AdministrativeArea',
			name: 'woj. Śląskie',
		},
	],
	sameAs: Object.values(siteConfig.externalLinks).filter(Boolean),
};
export default function Home() {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<HomeStart />
			<HomeAbout />
		</>
	);
}
