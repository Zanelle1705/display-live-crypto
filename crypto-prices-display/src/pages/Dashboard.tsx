import React from "react";
import { Link } from "react-router-dom";
import { useTop10Cryptocurrencies } from "../hooks/useCryptocurrencies";
import type { Cryptocurrency } from "../types/crypto";

const Dashboard: React.FC = () => {
  const { data, loading, error } = useTop10Cryptocurrencies();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Top 10 Cryptocurrencies</h1>
      <div className="grid gap-4 max-w-64">
        {data.map((crypto: Cryptocurrency) => (
          <Link to={`/crypto/${crypto.id}`} key={crypto.id}>
            <div className="bg-green-400 rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <h2>{crypto.name}</h2>
              <p>Price: R{crypto.current_price}</p>
              <p>24h Change: {crypto.price_change_percentage_24h}%</p>
              <p>Rank: #{crypto.market_cap_rank}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
