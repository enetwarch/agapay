import Brand from "@/components/brand";
import Header from "@/components/header";
import SignupForm from "./_components/signup-form";

export { signup as metadata } from "@/constants/metadata";
export default function Signup(): React.JSX.Element {
  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <Header label="Sign Up" backHref="/auth" />
      <main className="flex h-full w-full grow flex-col items-center justify-between gap-8 p-8">
        <Brand />
        <section className="flex w-full flex-col items-center justify-center">
          <h2 className="sr-only">Sign Up Form</h2>
          <SignupForm className="grow" />
        </section>
      </main>
    </div>
  );
}
