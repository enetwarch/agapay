import Brand from "@/components/brand";
import Header from "@/components/header";
import { Div, Main, Section } from "@/components/primitives/block";
import { Button } from "@/components/ui/button";
import TabBar from "@/features/(tabs)/tab-bar";

export { support as metadata } from "@/constants/metadata";
export default function Support(): React.JSX.Element {
  return (
    <Div size="screen">
      <Header label="Support" />
      <Main size="tabs" className="pt-8">
        <Brand />
        <Section className="px-4">
          <h2 className="sr-only">Notice</h2>
          <p className="text-center">
            This simple clicker game is made by a solo dev as a hobby project. Consider contributing or supporting me if
            you want to see more projects like this.
          </p>
          <strong className="font-bold">Enetwarch</strong>
        </Section>
        <Section>
          <h2 className="sr-only">Support Buttons</h2>
          <Button className="w-full" asChild>
            <a href="https://github.com/enetwarch/agapay" target="_blank" rel="noreferrer">
              Source Code
            </a>
          </Button>
          <Button className="w-full" asChild>
            <a href="https://github.com/enetwarch/agapay" target="_blank" rel="noreferrer">
              Buy Me a Coffee
            </a>
          </Button>
        </Section>
      </Main>
      <TabBar currentPage="/support" />
    </Div>
  );
}
