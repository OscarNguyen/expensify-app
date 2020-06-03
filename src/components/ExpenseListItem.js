import React from 'react';
import { Link } from 'react-router-dom';
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={{ pathname: `/edit/${id}` }}><h3>{description}</h3></Link>
    <p>{amount}-{createdAt} </p>

  </div>
);

/* const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(removeExpense)
  }
} */
/* const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
} */
export default ExpenseListItem;