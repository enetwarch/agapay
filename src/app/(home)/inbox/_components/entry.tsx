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
        "relative flex flex-col justify-center items-center p-4 bg-surface rounded-md",
        "active:bg-primary/30 transition-color duration-200",
        className,
      )}
      aria-label={isRead ? "Read message" : "Unread message"}
      {...props}
    >
      {!isRead && (
        <FontAwesomeIcon icon={faCircleExclamation} className="absolute text-primary text-lg -top-2 -right-2" />
      )}
      <h3 data-read={isRead} className="text-md font-normal w-full data-[read=true]:opacity-50">
        {title}
      </h3>
      <p data-read={isRead} className="w-full text-sm opacity-70 data-[read=true]:opacity-30">
        {body}
      </p>
    </article>
  );
}
