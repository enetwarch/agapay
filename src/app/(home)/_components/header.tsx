import { Header as HeaderComponent, HeaderText } from "@/components/ui/header";

type HeaderProps = Omit<React.ComponentProps<typeof HeaderComponent>, "children"> & {
  label: string;
};
export default function Header({ label, ...props }: HeaderProps): React.JSX.Element {
  return (
    <HeaderComponent {...props}>
      <HeaderText>{label}</HeaderText>
    </HeaderComponent>
  );
}
