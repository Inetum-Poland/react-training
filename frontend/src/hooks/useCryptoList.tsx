import { useEffect, useState } from "react";
import type { UserCryptoItem } from "./useUserCrypto";

export function useCryptoList() {
  const [cryptoList, setCryptoList] = useState<UserCryptoItem[]>([]);

  const fetchCrypto = async () => {
    const cryptoListUrl = "http://localhost:3000/api/v1/crypto/list";
    try {
      const response = await fetch(cryptoListUrl);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      setCryptoList(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  function getById(uuid: string) {
    return cryptoList.find((item) => item.uuid == uuid)
  }

  useEffect(() => {
    fetchCrypto();
  }, []);

  return {
    cryptoList,
    getById
  }
}
