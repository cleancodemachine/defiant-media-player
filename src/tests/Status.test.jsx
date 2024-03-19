import { render, screen} from '@testing-library/react';
import Status from '../components/Status';

import {test, expect} from 'vitest';
import '@testing-library/jest-dom'



test('Status component renders correctly', () => {
    render(<Status />);
    const statusElement = screen.getByRole('status');
    expect(statusElement).toBeInTheDocument();
});

test('getStatus function returns correct status when player is launched', async () => {
    let currentTrack = "";
    let isPaused = 0;
    render (<Status currentTrack={currentTrack} isPaused={isPaused}/>);
    const statusText = await screen.findByText("Select a track to play");
    expect(statusText).toBeInTheDocument();
});

test('Status component renders the correct text when player is paused', async  () => {
    const currentTrack = "test";
    const isPaused = 2;
    render(<Status currentTrack={currentTrack} isPaused={isPaused} />);
    const statusText = await screen.findByText("Paused");
    expect(statusText).toBeInTheDocument();
});



test('Status component renders the correct text when playing', async () => {
    const currentTrack = "Test Track";
    const isPaused = 1;
    render(<Status currentTrack={currentTrack} isPaused={isPaused} />);
    const statusText = await screen.findByText(`Playing ${currentTrack}`);
    expect(statusText).toBeInTheDocument();
});