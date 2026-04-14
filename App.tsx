import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./src/react-app/pages/Home";
import EDAPage from "./src/react-app/pages/EDA";
import PredictorPage from "./src/react-app/pages/Predictor";
import FeatureEngineeringPage from "./src/react-app/pages/FeatureEngineering";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eda" element={<EDAPage />} />
        <Route path="/feature-engineering" element={<FeatureEngineeringPage />} />
        <Route path="/predictor" element={<PredictorPage />} />
      </Routes>
    </Router>
  );
}