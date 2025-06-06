import { cn } from "@/lib/utils";

import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type EntryProps = Omit<React.ComponentProps<"article">, "children"> & {
  title: string;
  body: string;
  isRead?: boolean;
};
export default function Entry({ title, body, isRead = false, className, ...props }: EntryProps): React.JSX.Element {
  return (
    <article
      className={cn(
        "relative flex flex-col items-center justify-center rounded-md bg-surface p-4",
        "transition-color duration-200 active:bg-primary/30",
        className,
      )}
      aria-label={isRead ? "Read message" : "Unread message"}
      {...props}
    >
      {!isRead && (
        <FontAwesomeIcon icon={faCircleExclamation} className="-top-2 -right-2 absolute text-lg text-primary" />
      )}
      <h3 data-read={isRead} className="w-full font-normal text-md data-[read=true]:opacity-50">
        {title}
      </h3>
      <p data-read={isRead} className="w-full text-sm opacity-70 data-[read=true]:opacity-30">
        {body}
      </p>
    </article>
  );
}
