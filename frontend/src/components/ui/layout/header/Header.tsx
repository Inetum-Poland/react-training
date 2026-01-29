import { formatNumber } from "@/lib/utils";
import clsx from "clsx";
import { BadgeDollarSign, Loader2, Settings } from "lucide-react";
import { Button } from "../../button/Button";
import { userBalance } from "@/context/UserBalanceContext";

export default function Header() {
  const { balance, refresh } = userBalance();

  const balanceClass = clsx(
    balance != null && balance < 50000 ? "text-green-600" : "text-red-600"
  );

  return (
    <header className="bg-white px-6 py-4 flex items-center justify-between border-b border-neutral-200">
      <div className="flex items-center gap-2 font-medium">
        <BadgeDollarSign size={18} />
        <span>Balance:</span>
        {balance == null ? (
          <span className="flex items-center gap-2 text-neutral-500">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading...
          </span>
        ) : (
          <>
            <span className={balanceClass}>
              {formatNumber(balance, "pl-PL")} PLN
            </span>
            <Button
              variant="outline"
              className="text-neutral-700"
              onClick={refresh}
            >
              Refresh
            </Button>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Hello, Jane Doe</span>
        <Button variant="outline" size="icon" className="text-neutral-700">
          <Settings size={18} />
        </Button>
      </div>
    </header>
  );
}
