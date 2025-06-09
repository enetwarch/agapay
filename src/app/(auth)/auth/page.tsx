import Brand from "@/components/brand";
import Header from "@/components/header";
import { Div, Main, Section } from "@/components/primitives/block";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export { auth as metadata } from "@/constants/metadata";
export default function Auth(): React.JSX.Element {
  return (
    <Div size="screen">
      <Header label="Authentication" />
      <Main className="justify-between">
        <Brand />
        <Section>
          <h2 className="sr-only">Action Buttons</h2>
          <Button className="w-full" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </Section>
      </Main>
    </Div>
  );
}
