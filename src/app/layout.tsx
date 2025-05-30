import "@/styles/globals.css";

import MediaView from "@/components/media-view";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Agapay",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.ico",
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
        className={cn(
          "antialiased flex flex-col items-center justify-center min-h-screen min-w-full",
          poppins.variable,
        )}
      >
        <MediaView mediaQuery={"(max-width: 639px)"}>
          <MobileOnlyView />
        </MediaView>
        <div className="sm:hidden grow w-full flex flex-col items-center justify-center">{children}</div>
      </body>
    </html>
  );
}

function MobileOnlyView(): React.JSX.Element {
  return (
    <section role="alert" className={cn("fixed bg-background h-screen w-screen z-[9999] p-4")}>
      <div className="flex flex-col justify-center items-center h-full w-full gap-4">
        <FontAwesomeIcon icon={faMobile} className="text-9xl" />
        <p className="text-3xl text-center font-bold">Please view on mobile</p>
      </div>
    </section>
  );
}
