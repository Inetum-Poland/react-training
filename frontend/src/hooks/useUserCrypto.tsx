import { useState } from "react";

export interface UserCryptoItem {
  uuid: string;
  symbol: string;
  name: string;
  price: number;
  format: string;
  amount: number;
}

const mockData = [
  {
    uuid: "3f6a1b2c-9d4e-4a7f-8b21-2c9d8f4a1e77",
    symbol: "BTC",
    name: "Bitcoin",
    price: 35471.08,
    format: "pl-PL",
    amount: 1000,
  },
  {
    uuid: "7c2d5f91-4b3a-4f8d-9a6e-1f2b3c4d5e6f",
    symbol: "ETH",
    name: "Ethereum",
    price: 91803.64,
    format: "pl-PL",
    amount: 3000,
  },
  {
    uuid: "a1b2c3d4-e5f6-47a8-9123-456789abcdef",
    symbol: "SOL",
    name: "Solana",
    price: 33342.31,
    format: "pl-PL",
    amount: 5000,
  },
  {
    uuid: "f9e8d7c6-b5a4-4392-8012-3d2c1b0a9f88",
    symbol: "ADA",
    name: "Cardano",
    price: 65173.1,
    format: "pl-PL",
    amount: 400,
  },
];

export function useUserCrypto() {
  const stored = localStorage.getItem("userCryptoList");

  const [userCrypto, setUserCrypto] = useState<UserCryptoItem[]>(
    stored ? JSON.parse(stored) : []
  );

  function addCryptoItem(item: UserCryptoItem) {
    setUserCrypto((prev) => {
      const exist = prev.find((i) => i.uuid === item.uuid);
      let updated: UserCryptoItem[];
      if (exist) {
        updated = prev.map((i) =>
          i.uuid === item.uuid ? { ...i, amount: i.amount + item.amount } : i
        );
      } else {
        updated = [...prev, item];
      }
      localStorage.setItem("userCryptoList", JSON.stringify(updated));
      return updated;
    });
  }
  
  return {
    userCrypto,
    setUserCrypto,
    addCryptoItem,
  };
}
