import Brand from "@/components/brand";
import Header from "@/components/header";
import { Div, Main, Section } from "@/components/primitives/block";
import SignupForm from "@/feature/(auth)/signup-form";

export { signup as metadata } from "@/constants/metadata";
export default function Signup(): React.JSX.Element {
  return (
    <Div size="screen">
      <Header label="Sign Up" backHref="/auth" />
      <Main className="justify-between">
        <Brand />
        <Section className="grow justify-between">
          <h2 className="sr-only">Sign Up Form</h2>
          <SignupForm className="grow" />
        </Section>
      </Main>
    </Div>
  );
}
