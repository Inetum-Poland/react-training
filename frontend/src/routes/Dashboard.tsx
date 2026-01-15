import CryptoCard from "@/components/ui/cryptoCard/CryptoCard";
import LessonDetails from "@/LessonDetails";
import { useState } from "react";

interface UserCryptoItem {
  uuid: string;
  symbol: string;
  name: string;
  price: number;
  format: string;
  amount: number;
}

export default function DashboardPage() {
  const [userCrypto, setUserCrypto] = useState<UserCryptoItem[]>([
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
  ]);

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {userCrypto.map((item) => (
          <CryptoCard item={item} amount={1000} />
        ))}
      </div>
      <LessonDetails />
    </>
  );
}
