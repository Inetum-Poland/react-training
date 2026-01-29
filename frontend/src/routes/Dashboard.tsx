import CryptoCard from "@/components/ui/cryptoCard/CryptoCard";
import { cryptoList } from "@/context/CryptoListContext";

export default function DashboardPage() {
  const { userCrypto } = cryptoList();

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {userCrypto.map((item) => (
          <CryptoCard item={item} amount={1000} />
        ))}
      </div>
    </>
  );
}
