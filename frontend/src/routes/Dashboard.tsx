import CryptoCard from "@/components/ui/cryptoCard/CryptoCard";
import { ActionType, useUserState } from "@/context/UserStateContext";
import { useUserCrypto } from "@/hooks/useUserCrypto";

export default function DashboardPage() {
  const { userCrypto } = useUserCrypto();
  const { dispatch } = useUserState();

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {userCrypto.map((item) => (
          <CryptoCard item={item} amount={1000} />
        ))}
      </div>
      <button
        onClick={() => dispatch({ type: ActionType.UPDATE_AGE, payload: 100 })}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Set Age to 100
      </button>

    </>
  );
}
