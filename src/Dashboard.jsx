import React, { useEffect, useState } from "react";
import "./styles/Dashboard.css";

const Dashboard = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem("questions") || "[]");
    const storedUserAnswers = JSON.parse(localStorage.getItem("userAnswers") || "[]");
    const storedCorrectAnswers = JSON.parse(localStorage.getItem("correctAnswers") || "[]");

    setQuestions(storedQuestions);
    setUserAnswers(storedUserAnswers);
    setCorrectAnswers(storedCorrectAnswers);
  }, []);

  const buildCorrectSentence = (questionText, correctAnswer) => {
    const parts = questionText.split(/_{3,}/g);
    let result = "";

    parts.forEach((part, i) => {
      result += part;
      if (i < correctAnswer.length) {
        result += correctAnswer[i] + " ";
      }
    });

    return result.trim();
  };

  return (
    <>
    <div className="dashboard-container">
      <h2>Answer Review Dashboard</h2>

      {questions.map((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = correctAnswers[index] || [];

        const isCorrect =
          Array.isArray(userAnswer) &&
          Array.isArray(correctAnswer) &&
          correctAnswer.every((word, i) => word === userAnswer[i]);

        return (
          <div key={index} className="question-result">
            <div className="question">
              <h5>Q{index + 1} : {question.question}</h5>
            </div>
            <br />

            <div className="result">
              Your Response:{" "}
              <span className={isCorrect ? "correct" : "wrong"}>
                {isCorrect ? "Correct " : "Incorrect "}
              </span>
            </div>

            <div className="correct-answer">
              {buildCorrectSentence(question.question, correctAnswer)}
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Dashboard;
