// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import QuizPage from "./QuizPage"; // Import QuizPage
import ResultPage from "./ResultPage"; // Import ResultPage
import Dashboard from "./Dashboard"; // Import Dashboard
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* Add route for Dashboard */}
    </Routes>
  </BrowserRouter>
);
