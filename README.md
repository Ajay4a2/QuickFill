# QuickFill - Fill-in-the-Blank Quiz Application

> **Note**: The project is actually intended to use **Tailwind CSS** for styling; however, I opted to use **Bootstrap** for the initial development. I have used **Bootstrap** because of its simplicity and quick setup. But, I fully intend to learn **Tailwind CSS** and migrate the project to it in the future. Shifting to a new library or framework like Tailwind is easy, especially when you already have experience with other CSS libraries like Bootstrap. Tailwind’s utility-first approach will allow for more flexibility and customization, and I look forward to incorporating it into future projects.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Setup](#project-setup)
5. [File Structure](#file-structure)
6. [Components](#components)
7. [State Management](#state-management)
8. [Local Storage](#local-storage)
9. [Functionality](#functionality)
    - [Home Page (App.jsx)](#home-page-appjsx)
    - [Quiz Page (QuizPage.jsx)](#quiz-page-quizpagejsx)
    - [Result Page](#result-page)
    - [Dashboard](#dashboard)
10. [Contributing](#contributing)
11. [License](#license)

---

## Introduction

QuickFill is a fill-in-the-blank quiz application built using **React** and **Vite**. The app allows users to complete sentences by filling in missing words, with multiple choice options. It features a timer, progress tracking, local storage for saving answers, and a results page with a visual progress indicator.

---

## Features

- **Responsive UI**: Styled with **CSS** and **Bootstrap** to ensure the app works well on all devices.
- **Timer**: Each quiz question has a 30-second timer.
- **Local Storage Integration**: Stores user answers across sessions.
- **Circle Progress Bar**: Displays the user’s score in percentage.
- **State Management**: Handles quiz flow, answer tracking, and timer.
- **Review Dashboard**: A dashboard that shows a review of the user’s answers.

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool for fast development and optimized builds.
- **CSS & Bootstrap**: For styling and responsiveness.
- **Local Storage**: For saving and retrieving user answers.
- **React Circular Progress Bar**: Used to display the score percentage.

---

## Project Setup

To get started with the QuickFill project locally, follow these steps:

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/quickfill.git



File Structure :
quickfill/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx   # Dashboard page component
│   │   ├── QuizPage.jsx    # Main quiz page component
│   │   ├── ResultPage.jsx  # Result page component
│   │   └── CircleProgressBar.jsx # Circle progress bar for score display
│   ├── utils/
│   │   └── storage.js      # LocalStorage utility functions
│   ├── App.jsx             # Home page and app entry point
│   ├── index.js            # Entry point for React app
│   └── style.css           # Custom styles
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation



Components: 
1.Home Page (App.jsx)
    The Home Page (App.jsx) serves as the entry point of the application, displaying a welcome message and a button to start the quiz.

2.Quiz Page (QuizPage.jsx)
The QuizPage (QuizPage.jsx) handles the core functionality of the quiz:

    Displays sentences with blanks to be filled.

    Users select words from a set of options.

    Timer: A countdown of 30 seconds for each question.

    The next question is shown either when the timer runs out or when all blanks are filled.

    User answers are stored in local storage.

3.Result Page:
    The Result Page displays the user's score after completing the quiz:

    The total score is shown along with a circle progress bar that indicates the percentage of correct answers.

4.Dashboard:
    The Dashboard component displays a review of the user's answers:

    It shows a summary of the answered questions.

    Users can revisit their answers and check the progress.

Local Storage:
    Local Storage is used to persist user answers across sessions. The answers are stored and retrieved, ensuring continuity if the user leaves and returns later
