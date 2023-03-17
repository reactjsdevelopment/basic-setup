import { ADD_ARTICLE } from "../constants/action-types";

import { v4 as uuidv4 } from 'uuid';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
  };

  // export default addArticle;

  export const addExpense = ({ name, amount, spendDate, category }) => ({
    type: 'ADD_EXPENSE',
    payload: {
       id: uuidv4(),
       name,
       amount,
       spendDate,
       category
    }
 });


 export const deleteExpense = id => ({
  type: 'DELETE_EXPENSE',
  payload: {
     id
  }
});

export const updateExpense = id => ({
   type: 'UPDATE_EXPENSE',
   payload: {
      id
   }
 });