import SignupForm from "./components/signup-form";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Signup(): React.JSX.Element {
  return (
    <main className="w-full h-full grow flex flex-col justify-between items-center p-8 gap-8">
      <figure className="flex w-full flex-col justify-center items-center py-8 gap-4">
        <Image src="/favicon.svg" alt="Agapay Logo" height={128} width={128} />
        <figcaption className="text-primary font-bold text-4xl">Agapay</figcaption>
      </figure>
      <SignupForm className="grow" />
    </main>
  );
}
