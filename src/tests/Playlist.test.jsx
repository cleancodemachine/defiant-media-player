import { render, screen, fireEvent } from '@testing-library/react';
import Playlist from '../components/Playlist.jsx';
import {test, expect } from 'vitest';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'




test('array is populated correctly', async () => {
    render(<Playlist/>,);

    const elementsArray = await screen.findAllByRole("track-container");
    expect(elementsArray).toHaveLength(6);
});

test('Correct song title is displayed when song is double clicked', async () => {
    const songTitle = "Billie Jean";
    render(<Playlist />);
    const songElement = await screen.findByText(songTitle);
    fireEvent.dblClick(songElement);
    const displayedSongTitle =  await screen.findByText(`Playing ${songTitle}`);
    expect(displayedSongTitle).toHaveTextContent(songTitle);
});

//
test('Play/pause button starts player', async () => {
    const user = userEvent.setup()
    const songTitle = "Billie Jean";
    render(<Playlist/>);

    const buttonElement = screen.getByRole("button", { name: "Pause/Play" });
    await user.click(buttonElement);
    const textElement = await screen.findByText(`Playing ${songTitle}`);
    expect(textElement).toBeInTheDocument();
});

test('Next button gets next track', async () => {
    const user = userEvent.setup()
    render(<Playlist/>,);

    const playButtonElement = screen.getByRole("button", { name: /play/i });
    await user.click(playButtonElement);
    const textElement = await screen.findByText(/Playing Billie Jean/i);
    expect(textElement).toBeInTheDocument();
    const nextButtonElement = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButtonElement);
    const nextTextElement = await screen.findByText(/Playing Smells Like Teen Spirit/i);
    expect(nextTextElement).toBeInTheDocument();
});

test('Prev button plays last track', async () => {
    const user = userEvent.setup()
    render(<Playlist/>,);

    const buttonElement = screen.getByRole("button", { name: /prev/i });
    await user.click(buttonElement);
    // fireEvent.click(buttonElement);
    const textElement = await screen.findByText(/Playing Route Talk/i);
    expect(textElement).toBeInTheDocument();
});


test('shuffle button randomizes the playlist', async () => {
    render(<Playlist/>,);
    const textElement = await screen.findByText("Route Talk");
    const elementsArray= await screen.findAllByRole("track-container");
    expect(elementsArray).length(6);
    expect(textElement).toBeInTheDocument();
    const title = elementsArray[0].textContent;
    const buttonElement = screen.getByRole("button", { name: /shuffle/i });
    fireEvent.click(buttonElement);
    const shuffledTextElement = await screen.findByText("Route Talk");
    const shuffledArray = await screen.findAllByRole("track-container");
    expect(shuffledArray).length(6);
    expect(elementsArray).not.toEqual(shuffledArray);
    const shuffledTitle = shuffledArray[0].textContent;
    expect(shuffledTitle).not.toBe(title);
    expect(shuffledTextElement).toBeInTheDocument();
});




