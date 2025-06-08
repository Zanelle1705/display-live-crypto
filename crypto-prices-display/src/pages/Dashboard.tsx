import React from "react";
import { useTop10Cryptocurrencies } from "../hooks/useCryptocurrencies";

const Dashboard: React.FC = () => {
  const { data, loading, error } = useTop10Cryptocurrencies();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Top 10 Cryptocurrencies</h1>
      <div className="grid gap-4">
        {data?.map((coin) => (
          <li key={coin.id}>
            {coin.name} - R{coin.current_price}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
