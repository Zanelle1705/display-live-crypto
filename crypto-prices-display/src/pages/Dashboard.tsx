import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Top 10 Cryptocurrencies</h1>
      <div className="grid gap-4">
        {/* Cryptocurrency */}
        <p className="text-gray-600">Loading cryptocurrencies...</p>
      </div>
    </div>
  );
};

export default Dashboard;
