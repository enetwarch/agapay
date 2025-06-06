import EmailVerificationDialog from "./_components/email-verification-dialog";
import SignupForm from "./_components/signup-form";
import { DialogContextProvider } from "./_hooks/dialog-context";
import { EmailContextProvider } from "./_hooks/email-context";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Signup(): React.JSX.Element {
  return (
    <main className="flex h-full w-full grow flex-col items-center justify-between gap-8 p-8">
      <figure className="flex w-full flex-col items-center justify-center gap-4 py-8">
        <Image src="/favicon.svg" alt="Agapay Logo" height={128} width={128} />
        <figcaption className="font-bold text-4xl text-primary">Agapay</figcaption>
      </figure>
      <EmailContextProvider>
        <DialogContextProvider>
          <SignupForm className="grow" />
          <EmailVerificationDialog />
        </DialogContextProvider>
      </EmailContextProvider>
    </main>
  );
}
