import { ADD_ARTICLE } from "../constants/action-types";

// It takes two parameters: the current state and action
const initialState = {
  articles: [],
};

function rootReducer(state = initialState, action) {
  console.log(state, action, 'rootReducer');
  // If the action is single
// thired update data using action 
  if (action.type === ADD_ARTICLE) {
    // state.articles.push(action.payload);
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  // if we have multiple actions
  // switch (action.type) {
  //   case "ADD_EXPENSE":
  //     return [...state, action.payload];
  //   case "DELETE_EXPENSE":
  
  //     return {articles: state.articles.filter((expense) => expense.id !== action.payload.id)};
  //     case "UPDATE_EXPENSE":
  
  //     return {articles: state.articles.filter((expense) => expense.id !== action.payload.id)};
  //   case ADD_ARTICLE:
  //     return Object.assign({}, state, {
  //       articles: state.articles.concat(action.payload),
  //     });
  //   default:
  //     return state;
  // }
  // return state;
}

export default rootReducer;
