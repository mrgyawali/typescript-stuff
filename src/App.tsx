import React, { useState, FC } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { fetchQuestions, Difficulty } from './api'
const TOTAL_QUESTIONS = 10;

const App: FC = () =>{
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)


  console.log('hello;',fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY) )

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start_game" onClick={startTrivia}>Start</button>
      <p className="score">Score</p>
      {/* <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        handleCheckAnswer = {checkAnswer}
      /> */}
      <button className="next_question" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
