import { Lato } from 'next/font/google';
import '../sass/globals.scss';
import { Header } from '@/components/Header/Header';
import { Toaster } from 'react-hot-toast';
import { createMetadata } from '@/utils/metadata';
import { Footer } from '@/components/Footer/Footer';
import { CookieConsentBanner } from '@/components/CookieConsentBanner/CookieConsentBanner';
import { GAScriptLoader } from '@/system/GAScriptLoader';
import { ContextProvider } from '@/contexts/app.context';
import { CookieContextProvider } from '@/contexts/cookie.context';

const lato = Lato({
	subsets: ['latin'],
	weight: ['400', '700'],
});

export const metadata = createMetadata({
	title: 'Professional Frontend Starter for Developers',
	description:
		'Kickstart your modern frontend projects with this clean, SEO-friendly, and scalable boilerplate built with Next.js, TypeScript, and SCSS Modules.',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<body className={lato.className}>
				<ContextProvider>
					<CookieContextProvider>
						<Header />
						{children}
						<Footer />
						<Toaster />
						<CookieConsentBanner />
						<GAScriptLoader />
					</CookieContextProvider>
				</ContextProvider>
			</body>
		</html>
	);
}

//IMPROVE: zrób jeden, zgrupowany provider pod nazwą appProvider - wtefdy layou będzie czytelniejszy i nie będzie niepotrzebnych zagnieżdzeń,

// FIXME: sporządzić checklistę dla komplentego stowrzenia nowej strony z tego startera. Tak żeby nie zpomnieć o niczym i wszystko poprawnie skonfigurować
