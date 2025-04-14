import React, { useEffect, useState, useCallback } from "react";
import "./styles/QuizPage.css";
import { BsArrowRight } from "react-icons/bs";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filledWords, setFilledWords] = useState([null, null, null, null]);
  const [availableOptions, setAvailableOptions] = useState([]);
  const [timer, setTimer] = useState(30);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/yghugardare/Sample/main/sample.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.data.questions);
      });
  }, []);

  const moveToNextQuestion = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIndex] = filledWords;
    setUserAnswers(updatedAnswers);
    localStorage.setItem("userAnswers", JSON.stringify(updatedAnswers));

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setFilledWords([null, null, null, null]);
      setTimer(30);
    } else {
      localStorage.setItem(
        "correctAnswers",
        JSON.stringify(questions.map((q) => q.correctAnswer))
      );
      localStorage.setItem("questions", JSON.stringify(questions));
      window.location.href = "/result";
    }

    setIsTransitioning(false);
  }, [
    currentIndex,
    questions.length,
    isTransitioning,
    filledWords,
    userAnswers,
  ]);

  useEffect(() => {
    if (questions.length > 0) {
      setAvailableOptions(questions[currentIndex].options);
    }
  }, [currentIndex, questions]);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && !isTransitioning) {
      moveToNextQuestion();
    }

    return () => clearInterval(countdown);
  }, [timer, isTransitioning, moveToNextQuestion]);

  const handleWordClick = (word) => {
    if (availableOptions.includes(word)) {
      const firstEmptyIndex = filledWords.indexOf(null);
      if (firstEmptyIndex !== -1) {
        const updatedWords = [...filledWords];
        updatedWords[firstEmptyIndex] = word;
        setFilledWords(updatedWords);
        setAvailableOptions(availableOptions.filter((opt) => opt !== word));
      }
    } else if (filledWords.includes(word)) {
      const wordIndex = filledWords.indexOf(word);
      const updatedWords = [...filledWords];
      updatedWords[wordIndex] = null;
      setFilledWords(updatedWords);
      setAvailableOptions([...availableOptions, word]);
    }
  };

  const renderBlanks = (question) => {
    const parts = question.split(/_{3,}/g);
    let rendered = [];

    for (let i = 0; i < parts.length; i++) {
      rendered.push(<span key={`text-${i}`}>{parts[i]}</span>);
      if (i < 4) {
        rendered.push(
          <span
            key={`blank-${i}`}
            className="blank"
            onClick={() => {
              if (filledWords[i]) {
                handleWordClick(filledWords[i]);
              }
            }}
          >
            {filledWords[i] || ""}
          </span>
        );
      }
    }

    return rendered;
  };

  const handleOptionSelect = (word) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIndex] = [...filledWords];
    setUserAnswers(updatedAnswers);

    handleWordClick(word);
  };

  // Create a Steps Progress Bar (No Numbers)
  const StepsProgressBar = ({ totalSteps, currentStep }) => {
    const stepsArray = new Array(totalSteps).fill(0);

    return (
      <div className="steps-progress-bar">
        {stepsArray.map((_, index) => (
          <div
            key={index}
            className={`step ${
              index < currentStep ? "completed" : index === currentStep ? "active" : ""
            }`}
          />
        ))}
      </div>
    );
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const current = questions[currentIndex];

  return (
    <div className="quiz-container">
      <div className="top-bar mb-4">
        <div className="timer">0:{timer < 10 ? "0" + timer : timer}</div>
        <button className="quit-btn">Quit</button>
      </div>

      {/* Steps Progress Bar */}
      <StepsProgressBar totalSteps={10} currentStep={currentIndex } />

      <div className="instruction">
        Select the missing words in the correct order
      </div>
      <br />
      <div className="question-text">{renderBlanks(current.question)}</div>
      <div className="options">
        {availableOptions.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionSelect(opt)}
            disabled={filledWords.includes(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="nav-btn">
        <button
          disabled={filledWords.includes(null)}
          onClick={moveToNextQuestion}
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
