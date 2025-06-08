import React from "react";
import { Link } from "react-router-dom";
import { useTop10Cryptocurrencies } from "../hooks/useCryptocurrencies";
import type { Cryptocurrency } from "../types/crypto";

const Dashboard: React.FC = () => {
  const { data, loading, error } = useTop10Cryptocurrencies();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading cryptocurrencies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-red-600">Error: {error.message}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">No data found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Top 10 Cryptocurrencies
        </h1>

        <div className="grid gap-4">
          {data.map((crypto: Cryptocurrency) => (
            <Link to={`/crypto/${crypto.id}`} key={crypto.id}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={crypto.image}
                      alt={crypto.name}
                      className="w-10 h-10"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {crypto.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {crypto.symbol.toUpperCase()}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-800">
                      R {crypto.current_price.toLocaleString()}
                    </p>
                    <p
                      className={`text-sm ${
                        crypto.price_change_percentage_24h >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {crypto.price_change_percentage_24h >= 0 ? "↑" : "↓"}{" "}
                      {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                    </p>
                    <p className="text-sm text-gray-500">
                      Rank #{crypto.market_cap_rank}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
