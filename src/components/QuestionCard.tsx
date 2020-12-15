import React from 'react'

type Props = {
  question: string;
  answers: string[];
  handleCheckAnswer: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number

}

const QuestionCard: React.FC<Props> = ({question, answers, handleCheckAnswer, userAnswer, questionNumber, totalQuestions}) => {
  return (
    <div>
      <p className="question">Question: {questionNumber} / {totalQuestions}</p>
      <p dangerouslySetInnerHTML={{__html: question}}></p>
      <div>
        {
          answers.map((answer) => (
            <p>
              <button disabled={userAnswer} onClick={handleCheckAnswer}>
                <span dangerouslySetInnerHTML={{__html: answer}} />
              </button>
            </p>
          ))
        }
      </div>
    </div>
  )
}

export default QuestionCard
