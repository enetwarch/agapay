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

type AlertProps = {
  title: string;
  description: string;
};
export function alert({ title, description }: AlertProps): void {}

type AlertDialogProps = Omit<React.ComponentProps<typeof DialogContent>, "children"> & {
  trigger: React.ReactNode;
  title: string;
  description: string;
};
export function AlertDialog({ trigger, title, description, ...props }: AlertDialogProps): React.JSX.Element {
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
              Ok
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
