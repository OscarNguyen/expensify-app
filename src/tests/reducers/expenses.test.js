import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('shouldn\'t remove expense by id if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  }
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([expenses[1]])
})

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: expenses[1]
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[1], expenses[2]])
})

test('shouldn\'t edit expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: expenses[1]
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses])
})