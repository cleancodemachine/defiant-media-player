import {fireEvent, render, screen} from '@testing-library/react';
import Song from '../components/Song';

import {test, expect, vi } from 'vitest';
import '@testing-library/jest-dom'



//
test('onAdd function gets executed when a podcast is double-clicked', () => {
    const onAdd = vi.fn();
    render(<Song onAdd={onAdd}/>);
    const songContainer = screen.getByRole("track-container");
    fireEvent.dblClick(songContainer )
    expect(onAdd).toBeCalledTimes(1);
});

test('Song component renders correctly with valid data', async () => {
    const title = "Test Song";
    const artist = "Test Artist";
    const year = 2024;
    render(<Song title={ title} artist={artist} year={year}/>);
    const songTitle = await screen.findByText(title);
    const songArtist = await screen.findByText(artist);
    const songYear= await screen.findByText(year);
    expect(songTitle).toBeInTheDocument();
    expect(songArtist).toBeInTheDocument();
    expect(songYear).toBeInTheDocument();
});

test('Podcast component renders correctly with invalid data', async () => {
    const title = "Test Song";
    const artist = "Test Artist";
    const year = '2024';
    render(<Song title={ title} artist={artist} year={year}/>);
    const songTitle = await screen.findByText(title);
    const songArtist = await screen.findByText(artist);
    const songYear= screen.queryByText(year);
    expect(songTitle).toBeInTheDocument();
    expect(songArtist).toBeInTheDocument();
    expect(songYear).not.toBeInTheDocument();
});