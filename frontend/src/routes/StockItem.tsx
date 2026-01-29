import { useParams } from "react-router-dom";
import { formatNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button/Button";
import { useState } from "react";
import { InfoIcon } from "lucide-react";
import { cryptoList } from "@/context/CryptoListContext";
import { userCryptoList } from "@/context/UserCryptoContext";
import { userBalance } from "@/context/UserBalanceContext";

export default function StockItemPage() {
  const { uuid } = useParams();

  const [amount, setAmount] = useState<number | undefined>();

  const [isInputInvalid, setIsInvalid] = useState(false);

  const { addCryptoItem } = cryptoList();

  const { balance } = userBalance();

  const { getById } = userCryptoList();

  if (!uuid) {
    return <>Error! Can't fetch {uuid}</>;
  }

  const item = getById(uuid);

  if (!item) {
    return <>Error! Can't fetch {uuid}</>;
  }

  function onClick() {
    if (!uuid || !item || !amount) return;

    const payload = {
      uuid,
      symbol: item.symbol,
      name: item.name,
      price: item.price,
      format: item.format,
      amount,
    };

    addCryptoItem(payload);
  }

  function isAmountWarning(): boolean {
    if (!amount) return true;

    return amount < 0;
  }

  function isCostWarning(): boolean {
    if (!amount || !item || !balance) return false;

    const totalCost = amount * item.price;

    return totalCost >= balance;
  }

  function isSubmitDisabled(): boolean {
    return isAmountWarning() || isCostWarning();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.valueAsNumber;
    if (!value) setAmount(undefined);

    setAmount(value);

    setIsInvalid(false);
  }

  function handleBlur() {
    if (amount) {
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  }

  return (
    <div>
      <div className="bg-white shadow-sm border border-neutral-200 rounded-xl p-6 flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">{item?.name}</h1>
          <p className="text-neutral-500 text-lg">{item?.symbol}</p>
        </div>

        <div className="mt-2">
          <span className="text-neutral-500 text-sm">Aktualna cena</span>
          <div className="text-2xl font-semibold text-emerald-600">
            {item?.price && formatNumber(item?.price, "pl-PL")} PLN
          </div>
        </div>

        <div className="mt-6 border-t pt-6">
          <h2 className="text-xl font-semibold mb-3">Kup kryptowalutę</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onClick();
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-600">Ilość</label>
              <input
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${isInputInvalid || isCostWarning() ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:ring-neutral-900"}`}
                placeholder="np. 0.5"
              />
            </div>
            {isInputInvalid && (
              <span className="p-3 bg-red-500 text-white rounded-lg flex">
                <InfoIcon className="mr-3" /> Wpisz prawidłową wartość!
              </span>
            )}
            {isCostWarning() && (
              <span className="p-3 bg-red-500 text-white rounded-lg flex">
                <InfoIcon className="mr-3" /> Nie posiadasz wystarczająco dużo
                środków!
              </span>
            )}

            <Button
              disabled={isSubmitDisabled()}
              type="submit"
              className="w-full"
            >
              Kup
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
