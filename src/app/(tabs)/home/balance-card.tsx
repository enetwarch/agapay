import { Card } from "@/components/ui/card";

type BalanceCardProps = React.ComponentProps<typeof Card>;
export default function BalanceCard(props: BalanceCardProps): React.JSX.Element {
  return (
    <Card variant="primary" size="wfull" {...props}>
      <div className="flex flex-col absolute top-4 left-4">
        <h1 className="font-medium text-lg">Balance</h1>
        <p className="font-bold text-3xl">$69420</p>
      </div>
    </Card>
  );
}
