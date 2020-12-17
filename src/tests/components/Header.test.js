import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
  /* const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot(); */
});

test('should call startLogout on button click', () => {
  const onLogoutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={onLogoutSpy} />);
  wrapper.find('button').simulate('click');
  expect(onLogoutSpy).toHaveBeenCalled();
});
