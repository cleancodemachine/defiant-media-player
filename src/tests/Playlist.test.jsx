import { render, screen, fireEvent } from '@testing-library/react';
import Playlist from '../components/Playlist.jsx';
import {mswServer} from "../mocks/mockServer.js";
import {test, expect } from 'vitest';
import '@testing-library/jest-dom'
import { handlers } from "../mocks/handlers.js";



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
test('play button starts player', () => {
    render(<Playlist/>,);

    const buttonElement = screen.getByRole("button", { name: /play/i });
    fireEvent.click(buttonElement);
    const textElement = screen.getByText(/Playing/i);
    expect(textElement).toBeInTheDocument();
});


test('shuffle button randomizes the playlist', async () => {
    render(<Playlist/>,);
    const elementsArray= await screen.findAllByRole("track-container");
    expect(elementsArray).length(6);
    const title = elementsArray[0].textContent;
    const buttonElement = screen.getByRole("button", { name: /shuffle/i });
    fireEvent.click(buttonElement);
    const shuffledArray = await screen.findAllByRole("track-container");
    expect(elementsArray).not.toEqual(shuffledArray);
    expect(shuffledArray[0].textContent).not.toBe(title);
});




