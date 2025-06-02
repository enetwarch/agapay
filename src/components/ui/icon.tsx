import { cn } from "@/lib/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconProps = React.ComponentProps<typeof FontAwesomeIcon>;
export function Icon({ className, ...props }: IconProps): React.JSX.Element {
  return <FontAwesomeIcon className={cn("text-xl", className)} {...props} />;
}
