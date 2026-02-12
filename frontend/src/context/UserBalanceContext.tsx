import { createContext, useContext } from "react";

export interface UserBalanceContextType {
  balance: number | undefined;
  refresh: () => void;
}

export const UserBalanceContext = createContext<
  UserBalanceContextType | undefined
>(undefined);

export function useBalance() {
  const ctx = useContext(UserBalanceContext);

  if (!ctx) {
    throw new Error(
      "useBalance must be used within UserBalanceContextProvider",
    );
  }
  return ctx;
}
