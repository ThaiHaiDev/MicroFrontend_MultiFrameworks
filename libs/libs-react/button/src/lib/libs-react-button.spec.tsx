import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import LibsReactButton from './libs-react-button';


test('it should render a button with a label', () => {
  const onClick = jest.fn();
  const { baseElement } = render(<LibsReactButton label="Click me" onClick={onClick} />);
  expect(baseElement).toBeTruthy();
});

test('it should call the onClick function when clicked', () => {
  const onClick = jest.fn();
  const { getByTestId } = render(<LibsReactButton label="Click me" onClick={onClick} />);
  const button = getByTestId('button');

  fireEvent.click(button);

  expect(onClick).toHaveBeenCalled();
});