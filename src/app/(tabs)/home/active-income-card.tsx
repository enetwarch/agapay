import {
  Card,
  CardAction,
  CardActionIcon,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { faCircleInfo, faCircleUp } from "@fortawesome/free-solid-svg-icons";

type ActiveIncomeCardProps = React.ComponentProps<typeof Card>;
export default function ActiveIncomeCard(props: ActiveIncomeCardProps): React.JSX.Element {
  return (
    <Card variant="surface" {...props}>
      <CardHeader>
        <CardTitle>$1 per tap</CardTitle>
        <CardDescription>$69 to upgrade</CardDescription>
      </CardHeader>
      <CardFooter>
        <CardAction>
          <CardActionIcon icon={faCircleInfo} />
        </CardAction>
        <CardAction>
          <CardActionIcon icon={faCircleUp} />
        </CardAction>
      </CardFooter>
    </Card>
  );
}
