import React from "react";
import { useParams } from "react-router-dom";
import { useCryptocurrencyDetails } from "../hooks/useCryptoDetails";

const CryptoDetails: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useCryptocurrencyDetails(id!);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <div>
        <p>Price: R{data.market_data.current_price.zar}</p>
        <p>24h Change: {data.market_data.price_change_percentage_24h}%</p>
        <p>Market Cap: R{data.market_data.market_cap.zar}</p>
        <p>Rank: #{data.market_cap_rank}</p>
        <p>Circulating Supply: {data.market_data.circulating_supply}</p>
        <p>Total Supply: {data.market_data.total_supply || "N/A"}</p>
        <p>All Time High: R{data.market_data.ath.zar}</p>
        <p>All Time Low: R{data.market_data.atl.zar}</p>
      </div>

      <div>
        <h2>Description</h2>
        <p>{data.description.en}</p>
      </div>

      <p>Last updated: {data.last_updated}</p>
    </div>
  );
};

export default CryptoDetails;
