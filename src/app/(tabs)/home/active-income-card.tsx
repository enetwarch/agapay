import { Card } from "@/components/ui/card";

import { faCircleInfo, faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ActiveIncomeCardProps = React.ComponentProps<typeof Card>;
export default function ActiveIncomeCard(props: ActiveIncomeCardProps): React.JSX.Element {
  return (
    <Card variant="surface" size="wfull" {...props}>
      <div className="flex flex-col absolute top-4 left-4">
        <h1 className="font-bold text-3xl">$1 per tap</h1>
        <p className="text-lg">$69 to upgrade</p>
      </div>
      <div className="flex justify-center items-center p-2 absolute bottom-4 right-4 bg-foreground rounded-md">
        <div className="flex flex-col text-background justify-center items-center p-2 rounded-md active:bg-background/30 transition-colors duration-200">
          <FontAwesomeIcon icon={faCircleInfo} className="text-xl" />
        </div>
        <div className="flex flex-col text-background justify-center items-center p-2 rounded-md active:bg-background/30 transition-colors duration-200">
          <FontAwesomeIcon icon={faCircleUp} className="text-xl" />
        </div>
      </div>
    </Card>
  );
}
