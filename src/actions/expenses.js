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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database
      .ref(`users/${uid}/expenses`)
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

export const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        console.log('success');
        dispatch(removeExpense({ id }));
      })
      .catch((err) => {
        console.log('failed' + err);
      });
  };
};

//edit
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      })
      .catch((err) => console.log(err));
  };
};

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
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
