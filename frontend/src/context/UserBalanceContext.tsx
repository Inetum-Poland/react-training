import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import { useQuery } from "@tanstack/react-query";
interface BalanceContextType {
  balance: number | undefined;
  refresh: () => void;
}

interface UserBalanceContextProviderProps {
  children: ReactNode;
}

export const BalanceContext = createContext<BalanceContextType | undefined>(
  undefined
);

export default function UserBalanceContextProvider({
  children,
}: UserBalanceContextProviderProps) {
  const balanceUrl = "http://localhost:3000/api/v1/user/account/balance";

  const { refetch, data } = useQuery({
    queryKey: ['user-balance'],
    queryFn: () =>
      fetch(balanceUrl).then((res) =>
        res.json(),
      ),
  })

  return (
    <BalanceContext.Provider value={{ balance: data?.balance, refresh: refetch }}>
      {children}
    </BalanceContext.Provider>
  );
}

export function userBalance() {
  const ctx = useContext(BalanceContext);
  if (!ctx) {
    throw new Error(
      "userBalance must be used within UserBalanceContextProvider"
    );
  }
  return ctx;
}
