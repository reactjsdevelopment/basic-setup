import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { jumpToQuestion } from "../redux/reducer";

export default function QuestionNavigation() {
  const lastIndex = useSelector((state) => state.questions.length - 1);
  const currentIndex = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === lastIndex;

  const createButton = (text, index, disabled) => {
    return (
      <button
        onClick={() => dispatch(jumpToQuestion(index))}
        className="btn btn-sm btn-primary m-2"
        disabled={disabled}
      >
        {text}
      </button>
    );
  };

  return (
    <div className="container mt-2">
      <hr />
      <div className="row justify-content-center">
        {createButton("First", 0, isFirst)}
        {createButton("Prev", currentIndex - 1, isFirst)}
        {createButton("Next", currentIndex + 1, isLast)}
        {createButton("Last", lastIndex, isLast)}
      </div>
      <hr />
    </div>
  );
}
