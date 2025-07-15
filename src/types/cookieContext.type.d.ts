import React, { SetStateAction } from "react";

interface CookieContextType {
	consent: CookieConsentSettings | null;
	setConsent: React.Dispatch<React.SetStateAction<CookieConsentSettings | null>>;

	editedConsent: CookieConsentSettings | null;
	setEditedConsent: React.Dispatch<React.SetStateAction<CookieConsentSettings | null>>;

	consentStatus: ConsentStatus;
	setConsentStatus: React.Dispatch<React.SetStateAction<ConsentStatus>>;

	currentCookieTab: string;
	setCurrentCookieTab: React.Dispatch<React.SetStateAction<string>>;

	saveConsent: (consent: CookieConsentSettings, consentStatus: ConsentStatus) => void;
	acceptAll: ()=>void;
	resetConsent: ()=>void;

	isHydrated: boolean;

	showBanner: boolean;
	setShowBanner: React.Dispatch<React.SetStateAction<boolean>>
}
