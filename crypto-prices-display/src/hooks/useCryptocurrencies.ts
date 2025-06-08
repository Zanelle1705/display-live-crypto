import { useState, useEffect } from "react";
import { getTop10Cryptocurrencies } from "../services/api";
import type { Cryptocurrency } from "../types/crypto";

export const useTop10Cryptocurrencies = () => {
  const [data, setData] = useState<Cryptocurrency[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getTop10Cryptocurrencies()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
