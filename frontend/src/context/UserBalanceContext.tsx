import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

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
  const [balance, setBalance] = useState<number | undefined>(undefined);

  const fetchBalance = async () => {
    const balanceUrl = "http://localhost:3000/api/v1/user/account/balance";
    try {
      const response = await fetch(balanceUrl);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      setBalance(data.balance);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const refresh = () => fetchBalance();

  return (
    <BalanceContext.Provider value={{ balance, refresh }}>
      {children}
    </BalanceContext.Provider>
  );
}

export function useBalance() {
  const ctx = useContext(BalanceContext);
  if (!ctx) {
    throw new Error(
      "useBalance must be used within UserBalanceContextProvider"
    );
  }
  return ctx;
}
