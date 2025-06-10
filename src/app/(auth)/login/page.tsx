import Brand from "@/components/brand";
import Header from "@/components/header";
import { Main, Section } from "@/components/primitives/block";
import LoginForm from "@/features/(auth)/login-form";

export { login as metadata } from "@/constants/metadata";
export default function Login(): React.JSX.Element {
  return (
    <>
      <Header label="Log In" backHref="/" />
      <Main className="justify-between">
        <Brand />
        <Section className="grow justify-between">
          <h2 className="sr-only">Log In Form</h2>
          <LoginForm className="grow" />
        </Section>
      </Main>
    </>
  );
}
