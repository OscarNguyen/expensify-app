import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

const exampleData = {
  description: '11pro',
  note: '',
  amount: 999,
  createdAt: 1234,
};
//add
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database
      .ref('expenses')
      .push(expense)
      .then((snapshot) => {
        dispatch(
          addExpense({
            id: snapshot.key,
            ...expense,
          }),
        );
      });
  };
};
//remove
export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

//edit
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database
      .ref('expenses')
      .once('value')
      .then((dataSnapshot) => {
        console.log(dataSnapshot);
        const expenses = [];
        dataSnapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
