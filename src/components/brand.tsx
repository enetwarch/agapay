import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BrandProps = {
  hasText?: boolean;
};
export default function Brand({ hasText = true }: BrandProps): React.JSX.Element {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-4 p-4">
      <FontAwesomeIcon icon={faBuildingColumns} className="text-primary min-h-48 w-auto" />
      <h2 className="text-primary font-bold">Agapay</h2>
    </section>
  );
}
