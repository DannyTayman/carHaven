import { render, screen } from '@testing-library/react';
import { Button } from '../button';

test('renders button with text', () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});