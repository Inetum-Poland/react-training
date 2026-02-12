import { useParams } from "react-router-dom";
import { formatNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button/Button";
import { useState, type ChangeEvent } from "react";
import { useUserCrypto } from "@/hooks/useUserCrypto";
import Info from "@/components/ui/info/Info";
import { useBalance } from "@/context/UserBalanceContext";
import { useUserCryptoList } from "@/context/UserCryptoListContext";

export default function StockItemPage() {
  const { uuid } = useParams();

  const { balance } = useBalance();

  const [amount, setAmount] = useState(0);

  const [isAmountTouched, setIsAmountTouched] = useState(false);

  const { addCryptoItem } = useUserCrypto();

  const { getById } = useUserCryptoList();

  if (!uuid) {
    return <>Error!</>;
  }

  const item = getById(uuid);

  function onClick() {
    if (!uuid || !item) return;

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

  function amountWarning() {
    return isAmountTouched && amount <= 0;
  }

  function balanceWarning() {
    if (!item || !balance) return;

    const price = amount * item?.price;

    return price > balance;
  }

  function isSubmitDisabled() {
    return amountWarning() || balanceWarning();
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setAmount(Number(e.target.value));
  }

  function handleOnBlur() {
    setIsAmountTouched(true);
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
            className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-600">Ilość</label>
              <input
                type="number"
                min="0"
                step="0.0001"
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                className="border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                placeholder="np. 0.5"
              />
            </div>
            {amountWarning() && <Info label="Wpisz prawidłową wartość" />}
            {balanceWarning() && <Info label="Niewystarczające środki" />}
            <Button
              disabled={isSubmitDisabled()}
              type="submit"
              className="w-full mt-4">
              Kup
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
