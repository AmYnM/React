import { render, screen } from '@testing-library/react';
import Appl from './App';

test('renders learn react link', () => {
  render(<Appl />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
