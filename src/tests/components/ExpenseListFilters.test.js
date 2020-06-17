import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altfilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setTextFilter={setTextFilter}
    />,
  );
});

test('should render expenseFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render expenseFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altfilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'cc';
  wrapper.find('input').simulate('change', {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('should sort by date', () => {
  /*  wrapper.setProps({
    filters: altfilters,
  }); */
  wrapper.find('select').simulate('change', {
    target: { value: 'date' },
  });
  expect(sortByDate).toHaveBeenCalledWith();
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount' },
  });
  expect(sortByAmount).toHaveBeenCalledWith();
});

test('should handle date changes', () => {
  const startDate = moment(0);
  const endDate = moment(0).add(3, 'days');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'startDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
