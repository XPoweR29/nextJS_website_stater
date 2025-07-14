import { useContext } from 'react';
import { AppContextType } from '@/types/appContext.type';
import { AppContext } from '@/contexts/app.context';

export const useAppContext = (): AppContextType => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within a ContextProvider');
	}
	return context;
};
