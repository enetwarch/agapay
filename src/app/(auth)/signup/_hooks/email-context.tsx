"use client";

import { createContext, useContext, useMemo, useState } from "react";

type EmailContextType = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};
const EmailContext = createContext<EmailContextType | undefined>(undefined);

type EmailContextProviderProps = {
  children: React.ReactNode;
};
export function EmailContextProvider({ children }: EmailContextProviderProps): React.JSX.Element {
  const [email, setEmail] = useState<string>("");
  const value: EmailContextType = useMemo(() => ({ email, setEmail }), [email]);

  return <EmailContext.Provider value={value}>{children}</EmailContext.Provider>;
}

/** @throws {Error} useEmailContext must be used within a EmailContextProvider */
export const useEmailContext = (): EmailContextType => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmailContext must be used within a EmailContextProvider");
  }

  return context;
};
