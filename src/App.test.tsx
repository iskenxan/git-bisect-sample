import { render,  } from '@testing-library/react';
import App from './App';

test('Check for error', () => {
  render(<App />);
  const error = document.getElementsByClassName("error-container")
  expect(error[0]).toBeUndefined()
});
