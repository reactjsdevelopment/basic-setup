import React from "react";
import { useSelector } from "react-redux";

export default function ResultTile() {
  const questions = useSelector((state) => state.quiz.questions);

  const answers = useSelector((state) => state.quiz.answers);
console.log(questions, answers, 'qa')
  return (
    <>
      {/* {questions.length && questions.map((question, index) => {
        const selectedAnswer = answers[index];
        const correctAnswer = question.options.find((option) => option.isAnswer)?.name;
        const isCorrect = selectedAnswer === correctAnswer;
        return (
          <div
            key={question.id}
            className={
              "alert mx-auto px-4 py-1 w-100 " +
              (isCorrect ? "alert-success" : "alert-danger")
            }
            role="alert"
          >
            <p className="font-weight-bold">
              <strong> Q{question.id - 1000}.</strong> {question.name}
            </p>
            <div className="container">
              <div className="row">
                <form className=" ">
                  {question.options.map((option) => (
                    <div key={option.name} className="form-check">
                      <input
                        className="form-check-input key"
                        type="radio"
                        checked={option.name === selectedAnswer}
                        disabled
                      />
                      <label className="form-check-label">{option.name}</label>
                    </div>
                  ))}
                </form>
              </div>
            </div>

            <div className="alert alert-dark p-1 mt-3 mb-2 w-100" role="alert">
              Right answer is: <strong>{correctAnswer}</strong>
            </div>
          </div>
        );
      })} */}
    </>
  );
}
