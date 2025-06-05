import "@/styles/globals.css";

import GlobalEffects from "./_components/global-effects";
import MobileOnly from "./_components/mobile-only";

import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Agapay",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.png",
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased flex flex-col items-center justify-center min-h-screen w-full`}>
        <MobileOnly className="fixed z-[9999]" />
        {children}
        <GlobalEffects />
      </body>
    </html>
  );
}
