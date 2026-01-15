import { useParams } from "react-router-dom";
import { formatNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button/Button";
import { useState } from "react";

export default function StockItemPage() {
  const { uuid } = useParams();

  const [amount, setAmount] = useState(0);

  function onClick() {
    console.log('click', amount)
  }

  return (
    <div>
      <div className="bg-white shadow-sm border border-neutral-200 rounded-xl p-6 flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">BITCOIN {uuid}</h1>
          <p className="text-neutral-500 text-lg">BTC</p>
        </div>

        <div className="mt-2">
          <span className="text-neutral-500 text-sm">Aktualna cena</span>
          <div className="text-2xl font-semibold text-emerald-600">
            {formatNumber(1000, 'pl-PL')} PLN
          </div>
        </div>

        <div className="mt-6 border-t pt-6">
          <h2 className="text-xl font-semibold mb-3">Kup kryptowalutę</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onClick();
            }}
            className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-600">Ilość</label>
              <input
                type="number"
                min="0"
                step="0.0001"
                value={amount}
                onChange={(e) => setAmount(e.target.valueAsNumber)}
                className="border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                placeholder="np. 0.5"
              />
            </div>

            <Button disabled={!amount} type="submit" className="w-full mt-4">
              Kup
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}