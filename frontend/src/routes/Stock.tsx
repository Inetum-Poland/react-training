import CryptoCard from "@/components/ui/cryptoCard/CryptoCard";
import { useEffect, useState } from "react";

export default function StockPage() {
  const [cryptoList, setCryptoList] = useState([]);

  const fetchCrypto = async () => {
    const cryptoListUrl = "http://localhost:3000/api/v1/crypto/list";
    try {
      const response = await fetch(cryptoListUrl);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      setCryptoList(data);
      console.log(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchCrypto();
  }, []);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cryptoList.map((item) => (
        <CryptoCard item={item} />
      ))}
    </div>
  );
}
