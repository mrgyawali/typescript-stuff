
export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

// here we want all the correct_answer and incorrect_answers to be in one single array so QuizState will be the type for that
//here QuizState will use the Question type and add new answers key as array of string
export type QuizState = Quiz & { answers: string[]}


export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export const fetchQuestions = async(amount: number, difficulty: Difficulty) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=11&type=multiple&difficulty=${difficulty}`)
  const data = await response.json()
  const questionAndAnswers =  data.results.map((quiz: Quiz) => {
    return {
      ...quiz,
      answers: [...quiz.incorrect_answers, quiz.correct_answer].sort(() => 0.5 - Math.random())
    }
  })
  console.log({questionAndAnswers})
  return questionAndAnswers
}