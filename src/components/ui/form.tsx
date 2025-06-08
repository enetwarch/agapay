"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import type * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
  useFormState,
} from "react-hook-form";

export const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerProps<TFieldValues, TName>;
export function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: FormFieldProps<TFieldValues, TName>): React.JSX.Element {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

/** @throws {Error} if the hook is used outside of <FormField> */
export const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

type FormItemProps = React.ComponentProps<"div">;
export function FormItem({ className, ...props }: FormItemProps): React.JSX.Element {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={cn("flex w-full flex-col", className)} {...props} />
    </FormItemContext.Provider>
  );
}

type FormLabelProps = React.ComponentProps<typeof LabelPrimitive.Root>;
export function FormLabel({ className, ...props }: FormLabelProps): React.JSX.Element {
  const { error, formItemId } = useFormField();

  return (
    <Label data-slot="form-label" data-error={!!error} className={cn("", className)} htmlFor={formItemId} {...props} />
  );
}

type FormControlProps = React.ComponentProps<typeof Slot>;
export function FormControl({ ...props }: FormControlProps): React.JSX.Element {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
}

type FormMessageProps = React.ComponentProps<"p">;
export function FormMessage({ className, ...props }: FormMessageProps): React.JSX.Element {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      data-visible={!!error}
      className={cn("inline-flex w-full justify-end text-right font-medium text-primary text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}
