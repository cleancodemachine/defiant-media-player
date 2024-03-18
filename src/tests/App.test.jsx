import { render, screen } from '@testing-library/react';
import App from '../App';

import {test, expect } from 'vitest';
import '@testing-library/jest-dom'


//
test('renders media player header', () => {
    render(<App />);
    const headingElement = screen.getByText(/defiant media player/i);
    expect(headingElement).toBeInTheDocument();
});

