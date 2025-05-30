import { cn } from "@/lib/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FullScreenSectionProps = React.ComponentProps<"section">;
export function FullScreenSection({ className, children, ...props }: FullScreenSectionProps): React.JSX.Element {
  return (
    <section
      className={cn("bg-background h-screen w-screen flex flex-col justify-center items-center gap-4 p-4", className)}
      {...props}
    >
      {children}
    </section>
  );
}

type FullScreenIconProps = React.ComponentProps<typeof FontAwesomeIcon>;
export function FullScreenIcon({ className, ...props }: FullScreenIconProps): React.JSX.Element {
  return <FontAwesomeIcon className={cn("text-9xl", className)} {...props} />;
}

type FullScreenTextProps = React.ComponentProps<"p">;
export function FullScreenText({ className, children, ...props }: FullScreenTextProps): React.JSX.Element {
  return (
    <p className={cn("text-3xl text-center font-bold", className)} {...props}>
      {children}
    </p>
  );
}
