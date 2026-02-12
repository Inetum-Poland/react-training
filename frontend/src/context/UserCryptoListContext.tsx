import { createContext, useContext } from "react";

export interface UserCryptoItem {
  uuid: string;
  symbol: string;
  name: string;
  price: number;
  format: string;
  amount: number;
}

export interface UserCryptoListContextType {
  cryptoList: UserCryptoItem[];
  getById: (uuid: string) => UserCryptoItem | undefined;
}

export const UserCryptoListContext = createContext<
  UserCryptoListContextType | undefined
>(undefined);

export function useUserCryptoList() {
  const ctx = useContext(UserCryptoListContext);

  if (!ctx) {
    throw new Error(
      "useUserCryptoList must be used within UserCryptoListContextProvider",
    );
  }
  return ctx;
}
