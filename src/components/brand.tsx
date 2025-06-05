import { cn } from "@/lib/utils";

import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BrandProps = React.ComponentProps<"section"> & {
  hasText?: boolean;
};
export default function Brand({ hasText = true, className, ...props }: BrandProps): React.JSX.Element {
  return (
    <section className={cn("w-full flex flex-col justify-center items-center gap-4 p-4", className)} {...props}>
      <FontAwesomeIcon icon={faBuildingColumns} className="text-primary min-h-48 w-auto" />
      <h2 className="text-primary font-bold">Agapay</h2>
    </section>
  );
}
