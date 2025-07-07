import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import '../sass/globals.scss';
import { ContextProvider } from '../contexts/app.context';
import { Header } from '@/components/Header/Header';
import { Toaster } from 'react-hot-toast';

const lato = Lato({
	subsets: ['latin'],
	weight: ['400', '700'],
});

export const metadata: Metadata = {
	title: 'Project Starter',
	description: 'Created by WebCrftSTUDIO',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<body className={lato.className}>
				<ContextProvider>
					<Header />
					{children}
					<Toaster />
				</ContextProvider>
			</body>
		</html>
	);
}

// 

//TODO: dodać wszystkie przykądowe assety takie jak: og_img, logo, .ico itd. (dodaj komentarz przy każdym schema żeby pamiętać o jego odpowiednim typie wg. przeznaczenia strony.)

//TODO: FOOTER - kompletna stopka, która wykorzystuje informacje z siteConfig oraz jest poprawnie skonstruowana semantycznie.

//IMPROVE: pamiętaj o siteConfig, metadanych oraz schema

//FIXME: Pamiętaj o info o cookies!

// FIXME: sporządzić checklistę dla komplentego stowrzenia nowej strony z tego startera. Tak żeby nie zpomnieć o niczym i wszystko poprawnie skonfigurować
