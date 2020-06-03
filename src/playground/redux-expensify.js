import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

//add
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuidv4(),
      description,
      note,
      amount,
      createdAt
    }
  });

//remove
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})

//edit
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

//set text filter
const setTextFilter = (content = '') => ({
  type: 'SET_TEXT_FILTER',
  content
})


//sort by date
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//sort by amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

//set start date
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
})

//set end date
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatach = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatach && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }

  });
}
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(item => item.id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.updates }

        } else return item;
      });

    default:
      return state;
  }
}

const filtersReducerDefaultState = {
  text: "",
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.content
      };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
}

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}))


store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 500 }));
const expense2 = store.dispatch(addExpense({ description: 'iphone', amount: 1000, createdAt: 600 }));
/* 

store.dispatch(removeExpense({ id: expense1.expense.id }));
store.dispatch(editExpense(expense2.expense.id, { amount: 6000 }));

store.dispatch(setTextFilter());

store.dispatch(sortByDate()); */

/* store.dispatch(setStartDate(400));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
store.dispatch(setTextFilter('ph')); */
store.dispatch(sortByAmount());

const demoState = {
  expenses: [{
    id: '1',
    description: 'Jan rent',
    note: 'this is the final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}
