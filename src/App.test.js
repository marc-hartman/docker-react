import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bye there/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/just changed/i);
  expect(linkElement).toBeInTheDocument();
});

test('render', () => {
  render(<App />);
  const linkElement = screen.getByText(/just changed/i);
  expect(linkElement).toBeInTheDocument();
});