import React from 'react';
import { render, screen } from '@testing-library/react';
import AppOrig from './App.orig';

test('renders learn react link', () => {
  render(<AppOrig />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
