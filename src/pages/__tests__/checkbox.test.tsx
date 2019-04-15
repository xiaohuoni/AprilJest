import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { shallow } from 'enzyme';
import Checkbox from '../checkbox';

afterEach(cleanup);

it('Checkbox changes the text after click', () => {
  const { queryByLabelText, getByLabelText } = render(<Checkbox labelOn="On" labelOff="Off" />);
  expect(queryByLabelText(/off/i)).toBeTruthy();
  fireEvent.click(getByLabelText(/off/i));
  expect(getByLabelText(/on/i)).toBeTruthy();
});

test('Checkbo changes the text after click', () => {
  const checkbox = shallow(<Checkbox labelOn="On" labelOff="Off" />);
  expect(checkbox.text()).toEqual('Off');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('On');
});
