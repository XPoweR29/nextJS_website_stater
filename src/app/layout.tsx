import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../sass/globals.scss";
import { ContextProvider } from "../contexts/app.context";
import { Header } from "@/components/Header/Header";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: "Project Starter",
  description: "Created by WebCrftSTUDIO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={lato.className}>
        <ContextProvider>
          <Header/>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}


//TODO: Stworzyć header z opcjonalnym załączaniem chowania go oraz ze zmianą tła. 

//TODO: implementacja galeri oraz hook UseGallery

//TODO: dodać wszystkie przykądowe assety takie jak: og_img, logo, .ico itd.

//IMPROVE: pamiętaj o siteConfig, metadanych oraz schema


//FIXME: Pamiętaj o info o cookies!


