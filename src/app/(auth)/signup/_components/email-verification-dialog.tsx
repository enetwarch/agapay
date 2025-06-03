"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useDialogContext } from "../_hooks/dialog-context";
import { useEmailContext } from "../_hooks/email-context";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  code: z.string().min(6, {
    message: "Code required.",
  }),
});

type EmailVerificationDialogProps = React.ComponentProps<typeof DialogContent>;
export default function EmailVerificationDialog({ ...props }: EmailVerificationDialogProps): React.JSX.Element {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  const { open, setOpen } = useDialogContext();
  const { email } = useEmailContext();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent {...props}>
        <DialogHeader>
          <DialogTitle>Email Verification</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-4" noValidate>
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="w-auto flex justify-center items-center">
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogDescription>
              A verification code has been sent to <strong>{email}</strong>. Please enter the code sent to you.
            </DialogDescription>
            <DialogFooter>
              <Button type="submit" className="w-full">
                Confirm
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
