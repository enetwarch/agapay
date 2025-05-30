import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home(): React.JSX.Element {
  return <main>This is the home page.</main>;
}
