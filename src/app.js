import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css'

const store = configureStore();
/* console.log(store.getState()); */
/*  store.subscribe(() => {
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
 })  */
/* store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 500 }));
store.dispatch(addExpense({ description: 'iphone', amount: 1000, createdAt: 600 }));
 */
store.dispatch(addExpense({ description: 'Water bill', amount: 5000 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109005 }));
/* store.dispatch(setTextFilter('water'));
setTimeout(() => {
  store.dispatch(setTextFilter('bill'))
}, 3000) */
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
