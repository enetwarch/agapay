"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type * as React from "react";

type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>;
export function Dialog({ ...props }: DialogProps) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

type DialogTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;
export function DialogTrigger({ ...props }: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

type DialogPortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;
export function DialogPortal({ ...props }: DialogPortalProps) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

type DialogCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;
export function DialogClose({ ...props }: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

type DialogOverlayProps = React.ComponentProps<typeof DialogPrimitive.Overlay>;
export function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ",
        className,
      )}
      {...props}
    />
  );
}

type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
};
export function DialogContent({ className, children, showCloseButton = true, ...props }: DialogContentProps) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background fixed top-[50%] left-[50%] z-50 flex flex-col w-full translate-x-[-50%] translate-y-[-50%] max-w-[calc(100%-2rem)] gap-4 rounded-md p-4 shadow-lg",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-200",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <Button variant="ghost" size="icon" asChild>
            <DialogPrimitive.Close
              data-slot="dialog-close"
              className="absolute top-4 right-4 rounded-full aspect-square w-4 h-4 flex justify-center items-center"
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
export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

type DialogFooterProps = React.ComponentProps<"div">;
export function DialogFooter({ className, ...props }: DialogFooterProps) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  );
}

type DialogTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>;
export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

type DialogDescriptionProps = React.ComponentProps<typeof DialogPrimitive.Description>;
export function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("w-full bg-primary/10 text-primary p-2 rounded-md text-sm", className)}
      {...props}
    />
  );
}
