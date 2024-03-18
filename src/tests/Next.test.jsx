import {fireEvent, render, screen} from '@testing-library/react';
import Next from '../components/Next.jsx';

import {test, expect, vi } from 'vitest';
import '@testing-library/jest-dom'


//
test('onSkip function gets executed when Next button is clicked', () => {
    const onSkip = vi.fn();
    render(<Next onSkip={onSkip}/>);
    const nextButton = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(nextButton)
    expect(onSkip).toBeCalledTimes(1);
});