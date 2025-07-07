import { ContactForm } from '@/components/ContactForm/ContactForm';
import { ContactNap } from '@/components/ContactNap/ContactNap';
import { siteConfig } from '@/config/site.config';
import { ContactStart } from '@/sections/ContactStart/ContactStart';
import React from 'react';

const SLUG = 'kontakt';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	'@id': `${siteConfig.baseUrl}/${SLUG}/#contact`,
	url: `${siteConfig.baseUrl}/${SLUG}`,
	name: 'Kontakt | Działki w Beskidzie Żywieckim',
	description:
		'Skontaktuj się z nami – zadzwoń pod +48 504 058 507 lub wypełnij formularz na tej stronie.',
	isPartOf: {
		'@type': 'WebSite',
		'@id': `${siteConfig.baseUrl}/#main`,
	},
	potentialAction: [
		{
			'@type': 'CallAction',
			name: 'Zadzwoń do nas',
			target: `tel:${siteConfig.contact.phoneHref}`,
		},
		{
			'@type': 'SendAction',
			name: 'Wyślij zapytanie',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: `${siteConfig.baseUrl}/${SLUG}#formularz`,
				actionPlatform: [
					'https://schema.org/DesktopWebPlatform',
					'https://schema.org/MobileWebPlatform',
				],
			},
		},
	],
};

// export const metadata = createMetadata({
// 	slug: SLUG,
// 	title: 'Kontakt | Działki na sprzedaż w Beskidzie Żywieckim',
// 	description:
// 		'Skontaktuj się z nami. Zadzwoń lub napisz maila, aby dowiedzieć się więcej o dostępnych działkach.',
// });

const Contact = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

            <ContactStart/>
            <ContactNap/>
		</>
	);
};

export default Contact;
