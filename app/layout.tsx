import type { Metadata } from "next";
//import localFont from "next/font/local";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"], variable: '--font-inter'});
const ibmFlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
});

export const metadata: Metadata = {
  title: "Banking360",
  description: "Banking360 is a modern banking platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmFlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
