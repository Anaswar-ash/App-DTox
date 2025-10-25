import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

// Mock react-native-chart-kit to avoid rendering actual charts in tests
jest.mock('react-native-chart-kit', () => ({
  LineChart: () => 'LineChart',
}));

describe('App', () => {
  it('renders the main title', () => {
    const { getByText } = render(<App />);
    expect(getByText('App Usage Tracker')).toBeTruthy();
  });

  it('renders the three chart sections', () => {
    const { getByText } = render(<App />);
    expect(getByText('Social Apps')).toBeTruthy();
    expect(getByText('Productivity Apps')).toBeTruthy();
    expect(getByText('Entertainment Apps')).toBeTruthy();
  });
});