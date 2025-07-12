import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CONSENT_KEY = 'cookie_consent';

const defaultConsent: CookieConsentSettings = {
	necessary: true,
	personalization: false,
	safety: false,
	statistics: false,
	marketing: false,
	other: false,
};

export const useCookieConsent = () => {
	const [consent, setConsent] = useState<CookieConsentSettings | null>(
		defaultConsent
	);
	const [status, setStatus] = useState<ConsentStatus>('unset');

	useEffect(() => {
		const stored = Cookies.get(CONSENT_KEY);
		if (stored) {
			try {
				const parsed = JSON.parse(stored);
				setConsent(parsed);
				setStatus('custom');
			} catch {
				Cookies.remove(CONSENT_KEY);
			}
		}
	}, []);

	const saveConsent = (
		newConsent: CookieConsentSettings,
		newStatus: ConsentStatus = 'custom'
	) => {
		Cookies.set(CONSENT_KEY, JSON.stringify(newConsent), { expires: 180 });
		setConsent(newConsent);
		setStatus(newStatus);
	};

	const acceptAll = () => {
		const all: CookieConsentSettings = {
			necessary: true,
			personalization: true,
			safety: true,
			statistics: true,
			marketing: true,
			other: true,
		};
		saveConsent(all, 'accepted');
	};

	const rejectAll = () => {
		const none: CookieConsentSettings = {
			necessary: true,
			personalization: false,
			safety: false,
			statistics: false,
			marketing: false,
			other: false,
		};
		saveConsent(none, 'rejected');
	};

	const resetConsent = () => {
		Cookies.remove(CONSENT_KEY);
		setConsent(null);
		setStatus('unset');
	};

	return {
		consent,
		status,
		acceptAll,
		rejectAll,
		saveConsent,
		resetConsent,
	};
};
