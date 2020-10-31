import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense, startRemoveExpense, startEditExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onClick = () => {
    const id = this.props.expense.id;
    this.props.startRemoveExpense({ id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />

        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    /*     removeExpense: () => dispatch(removeExpense(props.expense.id)),
     */ startRemoveExpense: ({ id }) => dispatch(startRemoveExpense({ id })),
  };
};
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((item) => item.id === props.match.params.id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
