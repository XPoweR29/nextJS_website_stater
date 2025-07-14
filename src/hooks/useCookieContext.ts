import { CookieContext } from '@/contexts/cookie.context';
import { CookieContextType } from '@/types/cookieContext.type';
import { useContext } from 'react';

export const useCookieContext = (): CookieContextType => {
	const context = useContext(CookieContext);
	if (!context) {
		throw new Error('useCookieContext must be used within a CookieContextProvider');
	}
	return context;
};
