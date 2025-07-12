'use client';

import Script from 'next/script';
import { useCookieConsent } from '@/hooks/useCookieConsent'; 
import { useEffect, useState } from 'react';

const GA_TAG_ID = process.env.NEXT_PUBLIC_GA_ID;

export const GAScriptLoader = () => {
	const { consent } = useCookieConsent();
	//FIXME: zbuduj to na zmiennej dynamicznej trzymanej w kontekście 
	const [isAllowed, setIsAllowed] = useState(false);

	useEffect(() => {
		if (consent?.statistics) {
			setIsAllowed(true);
		}
	}, [consent]);

	if (!isAllowed || !GA_TAG_ID) return null;

	return (
		<>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`}
			/>
			<Script id='ga-init' strategy='afterInteractive'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', ${GA_TAG_ID}, {
						anonymize_ip: true,
						cookie_flags: 'SameSite=None;Secure'
					});
				`}
			</Script>
		</>
	);
};
