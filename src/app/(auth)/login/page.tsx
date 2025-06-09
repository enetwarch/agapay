import Brand from "@/components/brand";
import Header from "@/components/header";
import LoginForm from "./_components/login-form";

export { login as metadata } from "@/constants/metadata";
export default function Login(): React.JSX.Element {
  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <Header label="Log In" backHref="/auth" />
      <main className="flex h-full w-full grow flex-col items-center justify-between gap-8 p-8">
        <Brand />
        <section className="flex w-full flex-col items-center justify-center">
          <h2 className="sr-only">Log In Form</h2>
          <LoginForm className="grow" />
        </section>
      </main>
    </div>
  );
}
