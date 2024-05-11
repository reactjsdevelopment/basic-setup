import React from "react";
import { connect } from "react-redux";
import { deleteExpense, updateExpense } from "../actions";
import { addExpense } from "../actions";

const mapStateToProps = (state, ownprops) => {
  console.log(state, ownprops, "ownprops");
  return {
    articles: state.articles,
    expenses: state,
  };
};

// const mapStateToProps = (state) => {
//   return {
//   todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
//   }

// const mapDispatchToProps = (dispatch) => {
//   return {
//   onTodoClick: (id) => {
//   dispatch(toggleTodo(id))
//   }
//   }
//   }

// const mapDispatchToProps = ({
//   onTodoClick
//   })

const mapDispatchToProps = (dispatch) => {
  return {
    onAddExpense: (expense) => {
      dispatch(addExpense(expense));
    },
    onDelete: (id) => {
      dispatch(deleteExpense(id));
    },
    onUpdate: (id) => {
      dispatch(updateExpense(id));
    },
  };
};

const ConnectedList = ({ articles, onAddExpense, onDelete, onUpdate }) => 

(
 
  <div>
    <ul>
      {articles && articles.map((el) => (
        <li key={el.id}>{el.title} get</li>
      ))}
    </ul>
    {/* <button type="" onClick={() => onAddExpense({})}>
      onAddExpense
    </button> */}
    <button type="" onClick={() => onDelete(1)}>
      onDelete
    </button>
    <button type="" onClick={() => onUpdate(1)}>
      update
    </button>
  </div>
);

// const List = connect(mapStateToProps)(ConnectedList);
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
