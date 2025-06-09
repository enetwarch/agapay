import "@/styles/globals.css";

import { Globals } from "@/hooks/globals";
import { cn } from "@/lib/utils";

import { config } from "@fortawesome/fontawesome-svg-core";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Agapay",
  description:
    "Tap your way to riches! Earn money, unlock upgrades, and boost your income in this addictive clicker game.",
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
      <body
        className={cn("flex min-h-screen w-full flex-col items-center justify-center antialiased", poppins.variable)}
      >
        <aside className="fixed z-[9999] hidden min-h-screen min-w-screen flex-col items-center justify-center gap-4 bg-background p-4 sm:flex">
          <FontAwesomeIcon icon={faMobile} className="text-9xl" aria-hidden={true} />
          <p className="text-center font-bold text-3xl">Please view on mobile</p>
        </aside>
        {children}
        <Globals />
      </body>
    </html>
  );
}
