import React from "react";
import { useParams } from "react-router-dom";

const CryptoDetails: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cryptocurrency Details</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Loading details for {id}...</p>
      </div>
    </div>
  );
};

export default CryptoDetails;
