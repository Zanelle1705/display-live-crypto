import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CryptoDetails from "./pages/CryptoDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/crypto/:id" element={<CryptoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
