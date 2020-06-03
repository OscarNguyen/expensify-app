import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expense.length === 0 ?
      (<p>No expenses</p>) : (
        props.expense.map(item => {
          return <ExpenseListItem key={item.id} {...item} />
        })
      )}
  </div>
);

const mapStateToProps = state => {
  return {
    expense: selectExpenses(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);
