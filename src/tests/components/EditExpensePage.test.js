import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
//import { startRemoveExpense } from '../../actions/expenses';
let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      history={history}
      startRemoveExpense={startRemoveExpense}
      expense={expenses[1]}
    />,
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenCalledWith('/dashboard');
  expect(startEditExpense).toHaveBeenCalledWith(expenses[1].id, expenses[1]);
});

test('should handle startRemoveExpense', () => {
  /* wrapper.find('button').prop('onClick')(); */
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenCalledWith('/dashboard');
  expect(startRemoveExpense).toHaveBeenCalledWith({ id: expenses[1].id });
});
