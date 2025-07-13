import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage heading', () => {
  render(<App />);
  const heading = screen.getByText(/bello abdulrahman/i);
  expect(heading).toBeInTheDocument();
});
