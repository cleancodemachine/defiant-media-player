import {fireEvent, render, screen} from '@testing-library/react';
import Shuffle from '../components/Shuffle.jsx';

import {test, expect, vi } from 'vitest';
import '@testing-library/jest-dom'


//
test('onShuffle function gets executed when pause/play button is clicked', () => {
    const onShuffle = vi.fn();
    render(<Shuffle onShuffle={onShuffle}/>);
    const shuffleButton = screen.getByRole("button", { name: "Shuffle" });
    fireEvent.click(shuffleButton)
    expect(onShuffle).toBeCalledTimes(1);
});