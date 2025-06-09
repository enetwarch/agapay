import Image from "next/image";

export { index as metadata } from "@/constants/metadata";
export default function Index(): React.JSX.Element {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center p-4">
      <Image src="/favicon.svg" alt="logo" height={128} width={128} />
    </main>
  );
}
