import "@/styles/globals.css";

import { Div } from "@/components/primitives/block";
import { Globals } from "@/hooks/globals";
import { cn } from "@/lib/utils";

import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Agapay",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.png",
  },
};

const poppins: NextFontWithVariable = Poppins({
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
      <body className={cn(poppins.variable)}>
        <Div size="layout" className="overflow-hidden rounded-3xl border-16 border-surface border-solid">
          {children}
        </Div>
        <Globals />
      </body>
    </html>
  );
}
