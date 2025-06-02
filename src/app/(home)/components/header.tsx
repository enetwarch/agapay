"use client";

import { Header as HeaderComponent, HeaderText } from "@/components/header";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type HeaderProps = React.ComponentProps<typeof HeaderComponent>;
export default function Header(props: HeaderProps): React.JSX.Element {
  const pathname: string = usePathname();
  const [title, setTitle] = useState<string>("");

  // The pathname is needed so the component rerenders every page change.
  useEffect(() => {
    if (!pathname) return;
    setTitle(document.title);
  }, [pathname]);

  return (
    <HeaderComponent {...props}>
      <HeaderText>{title}</HeaderText>
    </HeaderComponent>
  );
}
