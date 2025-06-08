import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTop10Cryptocurrencies = async () => {
  try {
    const response = await api.get("/coins/markets", {
      params: {
        vs_currency: "zar",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: false,
        price_change_percentage: "24h",
        locale: "en",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top cryptocurrencies:", error);
    throw error;
  }
};

export const getCryptocurrencyDetails = async (id: string) => {
  try {
    const response = await api.get(`/coins/${id}`, {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${id}:`, error);
    throw error;
  }
};

export default api;
