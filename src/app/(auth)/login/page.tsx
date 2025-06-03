import LoginForm from "./_components/login-form";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Log In",
};

export default function Login(): React.JSX.Element {
  return (
    <main className="w-full h-full grow flex flex-col justify-between items-center p-8 gap-8">
      <figure className="flex w-full flex-col justify-center items-center py-8 gap-4">
        <Image src="/favicon.svg" alt="Agapay Logo" height={128} width={128} />
        <figcaption className="text-primary font-bold text-4xl">Agapay</figcaption>
      </figure>
      <LoginForm className="grow" />
    </main>
  );
}
