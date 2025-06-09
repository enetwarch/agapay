import Brand from "@/components/brand";
import Header from "@/components/header";
import { Div, Main, Section } from "@/components/primitives/block";
import LoginForm from "./_components/login-form";

export { login as metadata } from "@/constants/metadata";
export default function Login(): React.JSX.Element {
  return (
    <Div size="screen">
      <Header label="Log In" backHref="/auth" />
      <Main className="justify-between">
        <Brand />
        <Section className="grow justify-between">
          <h2 className="sr-only">Log In Form</h2>
          <LoginForm className="grow" />
        </Section>
      </Main>
    </Div>
  );
}
