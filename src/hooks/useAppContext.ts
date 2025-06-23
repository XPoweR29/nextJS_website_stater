import { useContext } from 'react';
import { AppContext } from '@/contexts/app.context';
import { AppContextType } from '@/types/appContext.type';

export const useAppContext = (): AppContextType => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within a ContextProvider');
	}
	return context;
};
