import { Card, CardHeader, CardTitle } from "@/components/ui/card";

type MoneyCardProps = Omit<React.ComponentProps<typeof Card>, "children">;
export default function MoneyCard({ ...props }: MoneyCardProps): React.JSX.Element {
  return (
    <Card variant="primary" {...props}>
      <CardHeader>
        <CardTitle className="text-3xl">$69420</CardTitle>
      </CardHeader>
    </Card>
  );
}
