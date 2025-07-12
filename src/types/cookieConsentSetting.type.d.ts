type CookieConsentSettings = {
	necessary: boolean;
	statistics: boolean;
	marketing: boolean;
	personalization: boolean;
	safety: boolean;
	other: boolean;
};

type ConsentStatus = 'accepted' | 'rejected' | 'custom' | 'unset';

interface Consent {
	id: keyof CookieConsentSettings;
	title: string;
	content?: string;
	required?: boolean;
}
