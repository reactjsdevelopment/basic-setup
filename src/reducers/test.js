// import questions from "./questions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
//   questions: questions,
questions: [{id:1}],


  counter: 0,

  answers: []
};

const slice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    jumpToFirst: (state) => {
      state.counter = 0;
    },
    jumpToLast: (state) => {
      state.counter = state.questions.length - 1;
    },
    jumpToQuestion: (state, action) => {
      state.counter = action.payload;
    },
    prev: (state) => {
      state.counter--;
    },
    next: (state) => {
      state.counter++;
    },
    updateAnswer: (state, action) => {
      const { index, answer } = action;
      state.answers[index] = answer;
    }
  }
});

export default slice.reducer;

export const {
  jumpToFirst,
  jumpToLast,
  jumpToQuestion,
  prev,
  next,
  updateAnswer
} = slice.actions;

// prev() instead of {type: "PREV"}
