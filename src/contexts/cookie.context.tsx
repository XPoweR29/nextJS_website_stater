'use client';

import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { CookieContextType } from '@/types/cookieContext.type';

export const CookieContext = createContext<CookieContextType | null>(null);

export const defaultConsent: CookieConsentSettings = {
	necessary: true,
	personalization: false,
	safety: false,
	statistics: false,
	marketing: false,
	other: false,
};

const CONSENT_KEY = 'cookie_consent';

export const CookieContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [consent, setConsent] = useState<CookieConsentSettings | null>(
		defaultConsent
	);
	const [editedConsent, setEditedConsent] = useState<CookieConsentSettings | null>(consent);
	const [consentStatus, setConsentStatus] = useState<ConsentStatus>('unset');
	const [currentCookieTab, setCurrentCookieTab] = useState<string>('unset');
	const [isHydrated, setIsHydrated] = useState(false);
	const [showBanner, setShowBanner] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem(CONSENT_KEY);
		if (stored) {
			try {
				const parsed = JSON.parse(stored);
				setConsent(parsed);
				setConsentStatus('custom');
			} catch {
				localStorage.removeItem(CONSENT_KEY);
			}
		}
		setIsHydrated(true);
	}, []);

	useEffect(() => {
		if (consent) setEditedConsent(consent);
	}, [consent]);

	const saveConsent = (
		newConsent: CookieConsentSettings,
		newStatus: ConsentStatus = 'custom'
	) => {
		localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
		setConsent(newConsent);
		setConsentStatus(newStatus);
		setCurrentCookieTab('consents');
		setShowBanner(false);
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
		saveConsent({...all}, 'accepted');
		setShowBanner(false);
	};

	const resetConsent = () => {
		localStorage.removeItem(CONSENT_KEY);
		setConsent(null);
		setConsentStatus('unset');
	};

	// declare type for all these vars in AppContextType!
	const contextValues = {
		consent,
		setConsent,
		consentStatus,
		setConsentStatus,
		acceptAll,
		saveConsent,
		resetConsent,
		currentCookieTab,
		setCurrentCookieTab,
		editedConsent,
		setEditedConsent,
		isHydrated,
		showBanner, setShowBanner
	};

	return (
		<CookieContext.Provider value={contextValues}>
			{children}
		</CookieContext.Provider>
	);
};
