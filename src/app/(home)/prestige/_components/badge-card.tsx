import { Card, CardHeader, CardTitle } from "@/components/ui/card";

type BadgeCardProps = Omit<React.ComponentProps<typeof Card>, "children">;
export default function BadgeCard({ ...props }: BadgeCardProps): React.JSX.Element {
  return (
    <Card variant="primary" {...props}>
      <CardHeader>
        <CardTitle className="text-3xl">*69</CardTitle>
      </CardHeader>
    </Card>
  );
}
