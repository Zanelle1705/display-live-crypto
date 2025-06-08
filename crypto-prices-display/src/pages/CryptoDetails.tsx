import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCryptocurrencyDetails } from "../hooks/useCryptoDetails";

const CryptoDetails: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useCryptocurrencyDetails(id!);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">
          Loading cryptocurrency details...
        </p>
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
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Dashboard
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4 mb-6">
            <img src={data.image.large} alt={data.name} className="w-16 h-16" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
              <p className="text-lg text-gray-500">
                {data.symbol.toUpperCase()}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  Price Information
                </h2>
                <p className="text-2xl font-bold text-gray-900">
                  R {data.market_data.current_price.zar.toLocaleString()}
                </p>
                <p
                  className={`text-sm ${
                    data.market_data.price_change_percentage_24h >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {data.market_data.price_change_percentage_24h >= 0
                    ? "↑"
                    : "↓"}{" "}
                  {Math.abs(
                    data.market_data.price_change_percentage_24h
                  ).toFixed(2)}
                  % (24h)
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  Market Data
                </h2>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Market Cap:</span> R{" "}
                    {data.market_data.market_cap.zar.toLocaleString()}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Rank:</span> #
                    {data.market_cap_rank}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Circulating Supply:</span>{" "}
                    {data.market_data.circulating_supply.toLocaleString()}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Total Supply:</span>{" "}
                    {data.market_data.total_supply?.toLocaleString() || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  All Time Stats
                </h2>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">All Time High:</span> R{" "}
                    {data.market_data.ath.zar.toLocaleString()}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">All Time Low:</span> R{" "}
                    {data.market_data.atl.zar.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  Description
                </h2>
                <div
                  className="text-gray-700 cursor-pointer"
                  onClick={() =>
                    setIsDescriptionExpanded(!isDescriptionExpanded)
                  }
                >
                  <p className={isDescriptionExpanded ? "" : "line-clamp-5"}>
                    {data.description.en}
                  </p>
                  <p className="text-gray-400 text-xs mt-2 mr-2 text-right">
                    {isDescriptionExpanded ? "Show less" : "Click to read more"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Last updated: {new Date(data.last_updated).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
