import Brand from "@/components/brand";
import Header from "@/components/header";
import { Div, Main, Section } from "@/components/primitives/block";
import { Button } from "@/components/ui/button";
import type { AuthPathname } from "@/constants/pathnames";

import Link from "next/link";

export { index as metadata } from "@/constants/metadata";
export default function Index(): React.JSX.Element {
  const loginPathname: AuthPathname = "/login";
  const signupPathname: AuthPathname = "/signup";

  return (
    <Div size="screen">
      <Header label="Agapay" />
      <Main className="justify-between">
        <Brand hasName={false} />
        <Section>
          <h2 className="sr-only">Action Buttons</h2>
          <Button className="w-full" asChild>
            <Link href={loginPathname}>Log in</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href={signupPathname}>Sign up</Link>
          </Button>
        </Section>
      </Main>
    </Div>
  );
}
