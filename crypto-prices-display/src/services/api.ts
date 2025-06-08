import axios from "axios";
import type { Cryptocurrency, CryptocurrencyDetails } from "../types/crypto";

const BASE_URL = "https://api.coingecko.com/api/v3";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get top 10 cryptocurrencies by market cap
export const getTop10Cryptocurrencies = async (): Promise<Cryptocurrency[]> => {
  try {
    const response = await api.get("/coins/markets", {
      params: {
        vs_currency: "zar",
        per_page: 10,
        price_change_percentage: "24h",
      },
    });
    console.log("getTop10Cryptocurrencies", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching top cryptocurrencies:", error);
    throw error;
  }
};

// Get details for a single cryptocurrency by ID
export const getCryptocurrencyDetails = async (
  id: string
): Promise<CryptocurrencyDetails> => {
  try {
    const response = await api.get(`/coins/${id}`, {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
      },
    });
    console.log("getCryptocurrencyDetails", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${id}:`, error);
    throw error;
  }
};

export default api;
