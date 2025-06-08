import { useState, useEffect } from "react";
import { getCryptocurrencyDetails } from "../services/api";
import type { CryptocurrencyDetails } from "../types/crypto";

export const useCryptocurrencyDetails = (id: string) => {
  const [data, setData] = useState<CryptocurrencyDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;

    getCryptocurrencyDetails(id)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading, error };
};
