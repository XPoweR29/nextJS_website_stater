import { SetStateAction } from "react";

interface AppContextType {
	breakpoint: Breakpoints;

	mobileMenuShown: boolean;
	setMobileMenuShown: React.Dispatch<React.SetStateAction<boolean>>;

	currentCookieTab: string;
	setCurrentCookieTab: React.Dispatch<React.SetStateAction<string>>;

	cookieConsent: CookieConsentSettings | null;
	setCookieConsent: React.Dispatch<React.SetStateAction<CookieConsentSettings | null>>;
}
