import React, { useEffect } from 'react';
import styles from './TabsGroup.module.scss';
import { useCookieContext } from '@/hooks/useCookieContext';

type Tab = {
	id: string;
	label: string;
	content: React.ReactNode;
};

interface Props {
	tabs: Tab[];
	initialTab?: string;
}

export const TabsGroup = ({ tabs, initialTab }: Props) => {
	const { currentCookieTab, setCurrentCookieTab } = useCookieContext();

	useEffect(() => {
		if (initialTab) {
			setCurrentCookieTab(initialTab);
		} else {
			setCurrentCookieTab(tabs[0].id);
		}
	}, []);

	return (
		<div className={styles.tabsContainer}>
			<div className={styles.tabList}>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						className={`${styles.tabButton} ${
							currentCookieTab === tab.id ? styles.active : ''
						}`}
						onClick={() => setCurrentCookieTab(tab.id)}>
						{tab.label}
					</button>
				))}
			</div>

			<div className={styles.tabContent}>
				{tabs.find((tab) => tab.id === currentCookieTab)?.content}
			</div>
		</div>
	);
};
