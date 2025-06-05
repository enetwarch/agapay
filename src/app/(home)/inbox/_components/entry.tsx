import { cn } from "@/lib/utils";

import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type EntryProps = Omit<React.ComponentProps<"article">, "children"> & {
  title: string;
  body: string;
  read?: boolean;
};
export default function Entry({ ...props }: EntryProps): React.JSX.Element {
  const { title, body, read = false, className } = props;

  return (
    <article
      className={cn(
        "relative flex flex-col justify-center items-center p-4 bg-surface rounded-md",
        "active:bg-primary/30 transition-color duration-200",
        className,
      )}
      {...props}
    >
      {!read && (
        <FontAwesomeIcon icon={faCircleExclamation} className="absolute text-primary text-lg -top-2 -right-2" />
      )}
      <h3 {...(read ? { "data-read": true } : {})} className="text-md font-normal w-full data-[read]:opacity-50">
        {title}
      </h3>
      <p {...(read ? { "data-read": true } : {})} className="w-full text-sm opacity-70 data-[read]:opacity-30">
        {body}
      </p>
    </article>
  );
}
