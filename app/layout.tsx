import type { Metadata } from "next";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb-garamond',
});

export const metadata: Metadata = {
  title: "Art Institute of Chicago Exhibitions",
  description: "Explore exhibitions at the Art Institute of Chicago",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} antialiased`}
      >
        <header className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <Image
            src="/worlds_columbian_exposition_fine_arts_museum.jpg"
            alt="World's Columbian Exposition Fine Arts Museum, Chicago, Illinois, PerspectiveDate: 1893"
            className="w-full h-full object-cover"
            width={1200}
            height={400}
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 drop-shadow-2xl">
            Art Institute of Chicago Exhibitions
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
