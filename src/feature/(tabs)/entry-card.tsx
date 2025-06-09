import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type EntryCardProps = Omit<React.ComponentProps<typeof Card>, "children"> & {
  title: string;
  body: string;
  isRead?: boolean;
};
export default function EntryCard({
  title,
  body,
  isRead = false,
  className,
  ...props
}: EntryCardProps): React.JSX.Element {
  return (
    <Card
      className={cn("relative transition-color duration-200 active:bg-primary/30", className)}
      aria-label={isRead ? "Read message" : "Unread message"}
      {...props}
    >
      <CardHeader>
        {!isRead && (
          <FontAwesomeIcon
            icon={faCircleExclamation}
            aria-hidden={true}
            className="-top-2 -right-2 absolute text-lg text-primary"
          />
        )}
        <CardTitle data-read={isRead} className="data-[read=true]:opacity-50">
          {title}
        </CardTitle>
        <CardDescription data-read={isRead} className="data-[read=true]:opacity-30">
          {body}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
