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

interface CryptoListContextType {
  cryptoList: UserCryptoItem[];
  getById: (uuid: string) => UserCryptoItem | undefined;
}

interface UserCryptoListContextProviderProps {
  children: ReactNode;
}

export const CryptoListContext = createContext<
  CryptoListContextType | undefined
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

  useEffect(() => {
    fetchCrypto();
  }, []);

  function getById(uuid: string) {
    return cryptoList.find((item) => item.uuid == uuid);
  }

  return (
    <CryptoListContext.Provider value={{ cryptoList, getById }}>
      {children}
    </CryptoListContext.Provider>
  );
}

export function userCryptoList() {
  const ctx = useContext(CryptoListContext);
  if (!ctx) {
    throw new Error(
      "userCryptoList must be used within UserCryptoListContextProvider",
    );
  }
  return ctx;
}
