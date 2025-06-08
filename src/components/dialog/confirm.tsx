import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ConfirmationDialogProps = Omit<React.ComponentProps<typeof DialogContent>, "children"> & {
  trigger: React.ReactNode;
  title: string;
  description: string;
  onConfirm: () => void;
};
export function ConfirmationDialog({
  trigger,
  title,
  description,
  onConfirm,
  ...props
}: ConfirmationDialogProps): React.JSX.Element {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent {...props}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" size="link">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="ghost" size="link" onClick={onConfirm}>
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
