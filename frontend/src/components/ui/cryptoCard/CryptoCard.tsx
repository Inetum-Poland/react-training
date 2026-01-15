import { formatNumber } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export interface CryptoItem {
  uuid: string;
  symbol: string;
  name: string;
  price: number;
  format: string;
}

interface Props {
  item: CryptoItem;
  amount?: number;
}

export default function CryptoCard({ item, amount }: Props) {
  const navigate = useNavigate();

  const hasAmount = typeof amount === "number";
  const totalValue = hasAmount ? item.price * amount : null;

  return (
    <div className="bg-white shadow-sm border border-neutral-200 rounded-xl p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-900">{item.name}</h3>
        <span className="text-sm text-neutral-500">{item.symbol}</span>
      </div>

      {hasAmount ? (
        <div className="flex flex-col">
          <span className="text-neutral-500 text-sm">Wartość</span>
          <span className="text-xl font-bold text-emerald-600">
            {formatNumber(totalValue!, item.format)} PLN
          </span>
        </div>
      ) : (
        <div className="flex flex-col">
          <span className="text-neutral-500 text-sm">Cena</span>
          <span className="text-xl font-bold text-emerald-600">
            {formatNumber(item.price, item.format)} PLN
          </span>
        </div>
      )}
      {!hasAmount && (
        <button
          onClick={() => navigate(`/stock/view/${item.uuid}`)}
          className="mt-2 w-full py-2 text-sm font-medium bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
          Podgląd
        </button>
      )}
    </div>
  );
}