"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type * as React from "react";

type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>;
export function Dialog({ ...props }: DialogProps): React.JSX.Element {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

type DialogTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;
export function DialogTrigger({ ...props }: DialogTriggerProps): React.JSX.Element {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

type DialogPortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;
export function DialogPortal({ ...props }: DialogPortalProps): React.JSX.Element {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

type DialogCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;
export function DialogClose({ ...props }: DialogCloseProps): React.JSX.Element {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

type DialogOverlayProps = React.ComponentProps<typeof DialogPrimitive.Overlay>;
export function DialogOverlay({ className, ...props }: DialogOverlayProps): React.JSX.Element {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in",
        className,
      )}
      {...props}
    />
  );
}

type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
};
export function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps): React.JSX.Element {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-0 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-0 -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-50 flex w-full max-w-md flex-col gap-4 rounded-md bg-background p-4 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <Button variant="ghost" size="icon" asChild>
            <DialogPrimitive.Close
              data-slot="dialog-close"
              className="absolute top-4 right-4 flex aspect-square h-4 w-4 items-center justify-center rounded-full"
            >
              <FontAwesomeIcon icon={faXmark} />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </Button>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

type DialogHeaderProps = React.ComponentProps<"div">;
export function DialogHeader({ className, ...props }: DialogHeaderProps): React.JSX.Element {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

type DialogFooterProps = React.ComponentProps<"div">;
export function DialogFooter({ className, ...props }: DialogFooterProps): React.JSX.Element {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  );
}

type DialogTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>;
export function DialogTitle({ className, ...props }: DialogTitleProps): React.JSX.Element {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("font-semibold text-lg leading-none", className)}
      {...props}
    />
  );
}

type DialogDescriptionProps = React.ComponentProps<typeof DialogPrimitive.Description>;
export function DialogDescription({ className, ...props }: DialogDescriptionProps): React.JSX.Element {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("w-full rounded-md bg-primary/10 p-2 text-primary text-sm", className)}
      {...props}
    />
  );
}
