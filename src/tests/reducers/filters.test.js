import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const action = { type: 'SORT_BY_DATE' };
  const result = filtersReducer(currentState, action);
  expect(result.sortBy).toBe('date');
})


test('should set text filter', () => {
  const text = "cc";
  const action = {
    type: 'SET_TEXT_FILTER',
    text: text
  }
  const result = filtersReducer(undefined, action);
  expect(result.text).toBe(text)
})

test('should set startDate filter', () => {
  const startDate = moment().startOf('month');
  const action = {
    type: 'SET_START_DATE',
    startDate
  }
  const result = filtersReducer(undefined, action);
  expect(result.startDate).toBe(startDate)
})



test('should set endDate filter', () => {
  const endDate = moment().endOf('month');
  const action = {
    type: 'SET_END_DATE',
    endDate
  }
  const result = filtersReducer(undefined, action);
  expect(result.endDate).toBe(endDate)
}) 