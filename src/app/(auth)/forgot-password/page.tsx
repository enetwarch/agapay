import ForgotPasswordForm from "./_components/forgot-password-form";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Forgot Password",
};

export default function ForgotPassword(): React.JSX.Element {
  return (
    <main className="flex h-full w-full grow flex-col items-center justify-between gap-8 p-8">
      <figure className="flex w-full flex-col items-center justify-center gap-4 py-8">
        <Image src="/favicon.svg" alt="Agapay Logo" height={128} width={128} />
        <figcaption className="font-bold text-4xl text-primary">Agapay</figcaption>
      </figure>
      <ForgotPasswordForm className="grow" />
    </main>
  );
}
