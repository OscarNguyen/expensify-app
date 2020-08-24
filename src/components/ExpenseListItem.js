import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={{ pathname: `/edit/${id}` }}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')}-{moment(createdAt).format('MMMM Do, YYYY')}
    </p>
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
