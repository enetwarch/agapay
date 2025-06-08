import Brand from "@/components/brand";
import Header from "@/components/header";
import SignupForm from "./_components/signup-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Signup(): React.JSX.Element {
  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <Header label="Sign Up" backHref="/auth" />
      <main className="flex h-full w-full grow flex-col items-center justify-between gap-8 p-8">
        <Brand />
        <SignupForm className="grow" />
      </main>
    </div>
  );
}
