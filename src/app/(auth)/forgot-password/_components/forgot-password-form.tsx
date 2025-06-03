"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

type ForgotPasswordFormProps = React.ComponentProps<"form">;
export default function ForgotPasswordForm({ className, ...props }: ForgotPasswordFormProps): React.JSX.Element {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // TODO: Add a backend system to handle these values
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("w-full flex flex-col justify-between items-center gap-16", className)}
        noValidate
        {...props}
      >
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="JohnDoe" autoComplete="on" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john.doe@gmail.com" autoComplete="on" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
