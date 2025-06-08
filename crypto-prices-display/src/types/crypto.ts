export interface Cryptocurrency {
  id: string;
  symbol: string;
  name: string;
  image: string; // URL of logo
  current_price: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  last_updated: string;
}

export interface CryptocurrencyDetails {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
    small: string;
    thumb: string;
  };
  market_cap_rank: number;
  last_updated: string;
  description: {
    en: string;
  };
  // ZAR values
  market_data: {
    current_price: {
      zar: number;
    };
    market_cap: {
      zar: number;
    };
    circulating_supply: number;
    total_supply: number;
    price_change_percentage_24h: number;
    ath: {
      zar: number;
    };
    atl: {
      zar: number;
    };
  };
}
