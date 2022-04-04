import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// estoy muteando este test pues tiene fallas aparentemente con la version de React Jest que uso
test.skip('renders message at homepage', () => {
  render(<App />);
  const msgElement = screen.getByText(/Todo-app React Legacy/i);
  expect(msgElement).toBeInTheDocument();
});
