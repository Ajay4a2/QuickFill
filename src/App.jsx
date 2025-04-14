import React from "react";
import { useNavigate } from "react-router-dom"; // 🔹 Import navigate hook
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { FaPen } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Navbar from "./Navbar";

function App() {
  const navigate = useNavigate(); // 🔹 Hook to navigate

  const handleStart = () => {
    navigate("/quiz"); // 🔹 Redirect to /quiz
  };

  return (
    <div className="home-container d-flex flex-column min-vh-100">
      
      <Navbar />
  
      {/* Main content takes full remaining height */}
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
        <div className="hero w-100 d-flex flex-column align-items-center">
          <FaPen size={24} /> <br />
          <h2>Sentence Construction</h2>
          <p style={{ fontSize: "1rem" }} className="w-100 grey">
            Select the correct words to complete the sentence by arranging <br /> the provided options in the right order
          </p>
        </div>
  
        <div className="three d-flex align-items-center gap-4 text-center mt-5">
          <div>
            <h6>Time Per Question</h6>
            <p className="grey">30</p>
          </div>
          <div className="vertical-divider"></div>
          <div>
            <h6>Total Questions</h6>
            <p className="grey">10</p>
          </div>
          <div className="vertical-divider"></div>
          <div>
            <h6>Coins</h6>
            <p className="grey">🟡 0</p>
          </div>
        </div>
  
        <div style={{ marginLeft: "5rem" }} className="buttons d-flex gap-4 mt-5">
          <button type="button" className="back_button">Back</button>
          <button type="button" className="start_button" onClick={handleStart}>
            Start
          </button>
        </div>
      </main>
    </div>
  );
  
}

export default App;
