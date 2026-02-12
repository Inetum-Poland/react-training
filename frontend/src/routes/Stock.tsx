import CryptoCard from "@/components/ui/cryptoCard/CryptoCard";
import { userCryptoList } from "@/context/UserCryptoList";

export default function StockPage() {
  const { cryptoList } = userCryptoList();

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cryptoList.map((item) => (
        <CryptoCard item={item} key={item.uuid}/>
      ))}
    </div>
  );
}
