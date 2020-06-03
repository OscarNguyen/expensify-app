import React from 'react';
import { ExpenseList } from '../../components/ExpenseList';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { TestScheduler } from 'jest';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expense={expenses} />);
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expense={[]} />);
  expect(wrapper).toMatchSnapshot();
})