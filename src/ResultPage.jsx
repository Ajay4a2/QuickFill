import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./styles/ResultPage.css";
import Navbar from "./Navbar";

const ResultPage = () => {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const userAnswers = JSON.parse(localStorage.getItem("userAnswers") || "[]");
    const correctAnswers = JSON.parse(
      localStorage.getItem("correctAnswers") || "[]"
    );

    let totalScore = 0;
    userAnswers.forEach((userAnswer, index) => {
      const correct = correctAnswers[index];
      if (
        Array.isArray(userAnswer) &&
        Array.isArray(correct) &&
        correct.every((word, i) => word === userAnswer[i])
      ) {
        totalScore += 10;
      }
    });

    setScore(totalScore);
    setTotal(correctAnswers.length * 10);
  }, []);

  const handleDashboardRedirect = () => {
    navigate("/dashboard");
  };

  const percentage = total ? Math.round((score / total) * 100) : 0;

  return (
    <>
      <Navbar />
      <div className="result-container">
        <div className="progress-bar">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#3e98c7",
              trailColor: "#eee",
              textSize: "16px",
            })}
          />
        </div>
        <p className="score-text">
          Your Score: {score} / {total}
        </p>
        <p className="message">
          {percentage === 100 ? (
            "You nailed it!"
          ) : (
            <>
              While you correctly formed several sentences, there are a couple
              of areas where <br /> improvement is needed. Pay close attention
              to sentence structure and word placement <br /> to ensure clarity
              and correctness. Review your responses below for more details.
            </>
          )}
        </p>
        <br /> <br />
        <button className="dashboard-btn" onClick={handleDashboardRedirect}>
          Go to Dashboard
        </button>
      </div>
    </>
  );
};

export default ResultPage;
