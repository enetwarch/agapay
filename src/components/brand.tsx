import { cn } from "@/lib/utils";

import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BrandProps = Omit<React.ComponentProps<"section">, "children"> & {
  hasName?: boolean;
};
export default function Brand({ className, hasName = true, ...props }: BrandProps): React.JSX.Element {
  return (
    <section className={cn("flex w-full flex-col items-center justify-center gap-4", className)} {...props}>
      <FontAwesomeIcon icon={faBuildingColumns} className="text-9xl text-primary" aria-hidden={true} />
      {hasName && <h2 className="font-bold text-primary text-xl">Agapay</h2>}
    </section>
  );
}
