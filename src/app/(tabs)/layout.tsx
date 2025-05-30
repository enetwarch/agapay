import Header from "@/app/(tabs)/header";
import TabBar from "@/app/(tabs)/tab-bar";

type TabsLayoutProps = {
  children: React.ReactNode;
};
export default function TabsLayout({ children }: TabsLayoutProps): React.JSX.Element {
  return (
    <div className="grow w-full flex flex-col">
      <Header className="pt-8" />
      <main className="h-full w-full grow flex-1 flex flex-col items-center p-4 gap-8 pb-34">{children}</main>
      <TabBar className="w-full fixed bottom-0 pb-8" />
    </div>
  );
}
