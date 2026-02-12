import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface UserCryptoItem {
  uuid: string;
  symbol: string;
  name: string;
  price: number;
  format: string;
  amount: number;
}

interface UserCryptoListContextType {
  cryptoList: UserCryptoItem[];
  getById: (uuid: string) => void;
}

interface UserCryptoListContextProviderProps {
  children: ReactNode;
}

export const UserCryptoListContext = createContext<
  UserCryptoListContextType | undefined
>(undefined);

export default function UserCryptoListContextProvider({
  children,
}: UserCryptoListContextProviderProps) {
  const [cryptoList, setCryptoList] = useState<UserCryptoItem[]>([]);

  const fetchCrypto = async () => {
    const cryptoListUrl = "http://localhost:3000/api/v1/crypto/list";
    try {
      const response = await fetch(cryptoListUrl);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      setCryptoList(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  function getById(uuid: string) {
    return cryptoList.find((item) => item.uuid == uuid);
  }

  useEffect(() => {
    fetchCrypto();
  }, []);

  return (
    <UserCryptoListContext.Provider value={{ cryptoList, getById }}>
      {children}
    </UserCryptoListContext.Provider>
  );
}

export function userCryptoList() {
  const ctx = useContext(UserCryptoListContext);

  if (!ctx) {
    throw new Error(
      "userCryptoList must be used within UserCryptoListContextProvider",
    );
  }
  return ctx;
}
