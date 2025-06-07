import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CryptoDetails from "./pages/CryptoDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/crypto/:id" element={<CryptoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
