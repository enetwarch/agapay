import "@/styles/globals.css";

import View from "@/components/view";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

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

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased flex flex-col items-center justify-center min-h-screen`}>
        <View />
        <div className="sm:hidden">{children}</div>
      </body>
    </html>
  );
}
