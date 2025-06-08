import Brand from "@/components/brand";
import Header from "@/components/header";
import LoginForm from "./_components/login-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In",
};

export default function Login(): React.JSX.Element {
  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <Header label="Log In" backHref="/auth" />
      <main className="flex h-full w-full grow flex-col items-center justify-between gap-8 p-8">
        <Brand />
        <LoginForm className="grow" />
      </main>
    </div>
  );
}
