import Header from "@/app/(tabs)/components/header";
import TabBar from "@/app/(tabs)/components/tab-bar";

type TabsLayoutProps = {
  children: React.ReactNode;
};

export default function TabsLayout({ children }: TabsLayoutProps): React.JSX.Element {
  return (
    <div className="grow w-full flex flex-col">
      <Header className="pt-8" />
      <main className="h-full w-full grow flex-1 flex flex-col items-center p-4 pb-30">{children}</main>
      <TabBar className="w-full fixed bottom-0 pb-8" />
    </div>
  );
}
