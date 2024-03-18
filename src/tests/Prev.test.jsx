import {fireEvent, render, screen} from '@testing-library/react';
import Prev from '../components/Prev.jsx';

import {test, expect, vi } from 'vitest';
import '@testing-library/jest-dom'


//
test('onPrev function gets executed when previous button is clicked', () => {
    const onPrev = vi.fn();
    render(<Prev onPrev={onPrev}/>);
    const button = screen.getByRole("button", { name: /Prev/i });
    fireEvent.click(button)
    expect(onPrev).toBeCalledTimes(1);
});

