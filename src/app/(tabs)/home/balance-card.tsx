import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type BalanceCardProps = React.ComponentProps<typeof Card>;
export default function BalanceCard(props: BalanceCardProps): React.JSX.Element {
  return (
    <Card variant="primary" {...props}>
      <CardHeader>
        <CardTitle className="text-4xl">$69420</CardTitle>
        <CardDescription>Current balance</CardDescription>
      </CardHeader>
    </Card>
  );
}
