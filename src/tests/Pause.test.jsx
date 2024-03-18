import {fireEvent, render, screen} from '@testing-library/react';
import Pause from '../components/Pause.jsx';

import {test, expect, vi } from 'vitest';
import '@testing-library/jest-dom'


//
test('onPause function gets executed when pause/play button is clicked', () => {
    const onPause = vi.fn();
    render(<Pause onPause={onPause}/>);
    const pauseButton = screen.getByRole("button", { name: "Pause/Play" });
    fireEvent.click(pauseButton)
    expect(onPause).toBeCalledTimes(1);
});