import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { UserCryptoItem } from "./UserCryptoContext";

interface CryptoListContextType {
  userCrypto: UserCryptoItem[],
  setUserCrypto: Dispatch<SetStateAction<UserCryptoItem[]>>,
  addCryptoItem: (item: UserCryptoItem) => void
}

interface CryptoListContextProviderProps {
  children: ReactNode;
}

export const CryptoListContext = createContext<
  CryptoListContextType | undefined
>(undefined);

export default function CryptoListContextProvider({
  children,
}: CryptoListContextProviderProps) {
  const stored = localStorage.getItem("userCryptoList");

  const [userCrypto, setUserCrypto] = useState<UserCryptoItem[]>(
    stored ? JSON.parse(stored) : [],
  );

  function addCryptoItem(item: UserCryptoItem) {
    setUserCrypto((prev) => {
      const exist = prev.find((i) => i.uuid === item.uuid);
      let updated: UserCryptoItem[];
      if (exist) {
        updated = prev.map((i) =>
          i.uuid === item.uuid ? { ...i, amount: i.amount + item.amount } : i,
        );
      } else {
        updated = [...prev, item];
      }
      localStorage.setItem("userCryptoList", JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <CryptoListContext.Provider
      value={{ userCrypto, setUserCrypto, addCryptoItem }}
    >
      {children}
    </CryptoListContext.Provider>
  );
}

export function cryptoList() {
  const ctx = useContext(CryptoListContext);
  if (!ctx) {
    throw new Error("cryptoList must be used within CryptoListContextProvider");
  }
  return ctx;
}
