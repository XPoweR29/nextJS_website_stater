'use client';

import React, { useEffect, useState } from 'react';
import styles from './CookieConsentBanner.module.scss';
import logo from '../../assets/images/logo.png';
import { CookieAccordion } from '../CookieAccordion/CookieAccordion';
import { TabsGroup } from '../TabsGroup/TabsGroup';
import Image from 'next/image';
import { useCookieContext } from '@/hooks/useCookieContext';

const consents: Consent[] = [
	{
		id: 'necessary',
		title: 'Niezbędne',
		required: true,
		content:
			'Niezbędne ciasteczka do zapewnienia prawidłowego działania i świadczenia usług naszego sklepu internetowego. Pozwalają na zapamiętanie ustawień użytkownika, np. języka, waluty, koszyka, wyglądu strony, itp. Funkcjonalne ciasteczka nie zbierają żadnych danych osobowych ani nie przesyłają żadnych informacji do zewnętrznych stron.',
	},
	{
		id: 'personalization',
		title: 'Personalizacja',
		content:
			'Statystyczne ciasteczka zbierają anonimowe informacje o użytkownikach...',
	},
	{
		id: 'safety',
		title: 'Bezpieczeństwo',
		content:
			'Ciasteczka bezpieczeństwa zapewniają bezpieczeństwo uwierzytelniania, zabezpieczenia przeciwko oszustwom i inne środki ochrony dla użytkowników. Warto traktować te cookies jako "niezbędne". Jeżeli jednak zdecydujesz się mieć tę kategorię osobno to pamiętaj ustawić odpowiednio zgody wysyłane do Google Tag Manager.',
	},
	{
		id: 'statistics',
		title: 'Statystyczne',
		content:
			'Statystyczne ciasteczka zbierają anonimowe informacje o użytkownikach, takie jak liczba odwiedzających, źródła odnośników, itp. Te informacje pomagają zrozumieć, jak użytkownicy korzystają z witryny.',
	},
	{
		id: 'marketing',
		title: 'Marketing',
		content:
			'Marketingowe ciasteczka są używane do śledzenia użytkowników przez witryny. Celem jest pokazywanie bardziej dopasowanych treści reklamowych.',
	},
	{
		id: 'other',
		title: 'Pozostałe',
		content: 'Pozostałe ciasteczka, które nie są jednoznacznie sklasyfikowane.',
	},
];

export const CookieConsentBanner = () => {
	const { consentStatus, acceptAll, saveConsent, editedConsent, currentCookieTab, setCurrentCookieTab, consent, isHydrated, showBanner, setShowBanner } = useCookieContext();

	useEffect(() => {
		if(isHydrated && consentStatus === 'unset') {
			const timeout = setTimeout(() => {
				setShowBanner(true);
			}, 500);

			return () => clearTimeout(timeout);
		} else setShowBanner(false);

	}, [consentStatus, isHydrated]);

	const handleSave = () => {
		if (!editedConsent) return;
		saveConsent(editedConsent, 'custom');
	};
	
	if(!showBanner) return null;

	return (
		<div className={styles.cookieBanner}>
			<div className={styles.container}>

				<div className={styles.imgContainer}>
					<Image className={styles.logo} src={logo} alt='' aria-hidden draggable={false} />
				</div>

				<TabsGroup
					tabs={[
						{
							id: 'consents',
							label: 'Zgody',
							content: (
								<div className={`${styles.tabContent}`}>
									<p className={styles.heading}>
										Informacje dotyczące plików cookies
									</p>
									<p className={styles.text}>
										Ta witryna korzysta z własnych plików cookie, aby zapewnić
										Ci najwyższy poziom doświadczenia na naszej stronie .
										Wykorzystujemy również pliki cookie stron trzecich w celu
										ulepszenia naszych usług, analizy a nastepnie wyświetlania
										reklam związanych z Twoimi preferencjami na podstawie
										analizy Twoich zachowań podczas nawigacji.
									</p>
								</div>
							),
						},
						{
							id: 'details',
							label: 'Szczegóły',
							content: (
								<div className={styles.tabContent}>
									<p className={styles.heading}>Zarządzanie plikami cookies</p>
									<CookieAccordion items={consents} allowMultiopen />
								</div>
							),
						},
						{
							id: 'about',
							label: 'O Cookies',
							content: (
								<div className={styles.tabContent}>
									<p className={styles.heading}>O Cookies</p>
									<p className={styles.text}>
										Pliki cookie to niewielkie pliki tekstowe, które są
										zapisywane na komputerze lub urządzeniu mobilnym przez
										strony internetowe, które odwiedzasz. Służą do różnych
										celów, takich jak zapamiętywanie informacji o logowaniu
										użytkownika, śledzenie zachowania użytkownika w celach
										reklamowych i personalizacji doświadczenia przeglądania
										użytkownika. Istnieją dwa rodzaje plików cookie: sesyjne i
										trwałe. Te pierwsze są usuwane po zakończeniu sesji
										przeglądarki, podczas gdy te drugie pozostają na urządzeniu
										przez określony czas lub do momentu ich ręcznego usunięcia.
									</p>
								</div>
							),
						},
					]}
				/>

				<div className={styles.footer}>
					<button
						className={`${styles.button} ${styles.adjust}`}
						onClick={
							currentCookieTab === 'details'
								? handleSave
								: () => setCurrentCookieTab('details')
						}>
						{currentCookieTab === 'details' ? 'Zaakceptuj wybrane' : 'Dostosuj'}
					</button>

					<button
						className={`${styles.button} ${styles.acceptAll}`}
						onClick={acceptAll}>
						Zaakceptuj wszystkie
					</button>
				</div>
			</div>
		</div>
	);
};
