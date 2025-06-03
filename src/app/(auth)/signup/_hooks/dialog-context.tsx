"use client";

import { createContext, useContext, useMemo, useState } from "react";

type DialogContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DialogContext = createContext<DialogContextType | undefined>(undefined);

type DialogContextProviderProps = {
  children: React.ReactNode;
};
export function DialogContextProvider({ children }: DialogContextProviderProps): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const value: DialogContextType = useMemo(() => ({ open, setOpen }), [open]);

  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
}

/** @throws {Error} useDialogContext must be used within a DialogContextProvider */
export const useDialogContext = (): DialogContextType => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogContext must be used within a DialogContextProvider");
  }

  return context;
};
