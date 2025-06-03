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

type PassiveIncomeCardProps = React.ComponentProps<typeof Card>;
export default function PassiveIncomeCard(props: PassiveIncomeCardProps): React.JSX.Element {
  return (
    <Card variant="surface" {...props}>
      <CardHeader>
        <CardTitle>$0.1 per second</CardTitle>
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
