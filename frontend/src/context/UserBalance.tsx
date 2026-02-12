import { useEffect, useState, type ReactNode } from "react";
import { UserBalanceContext } from "./UserBalanceContext";

interface UserBalanceContextProviderProps {
  children: ReactNode;
}

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
    <UserBalanceContext.Provider value={{ balance, refresh }}>
      {children}
    </UserBalanceContext.Provider>
  );
}
