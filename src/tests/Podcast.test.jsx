import {fireEvent, render, screen} from '@testing-library/react';
import Podcast from '../components/Podcast.jsx';

import {test, expect, vi } from 'vitest';
import '@testing-library/jest-dom'


//
test('onAdd function gets executed when a podcast is double-clicked', () => {
    const onAdd = vi.fn();
    render(<Podcast onAdd={onAdd}/>);
    const podcastContainer = screen.getByRole("track-container");
    fireEvent.dblClick(podcastContainer)
    expect(onAdd).toBeCalledTimes(1);
});

test('Podcast component renders correctly with valid data', async () => {
    const episodeTitle = "Test Episode";
    const episode = 5;
    const season = 1;
    render(<Podcast episodeTitle={ episodeTitle} season={season} episode={episode}/>);
    const podcastTitle = await screen.findByText(episodeTitle);
    const podcastEpisode = await screen.findByText(`Episode ${episode}`);
    const podcastSeason = await screen.findByText(`Season ${season}`);
    expect(podcastTitle).toBeInTheDocument();
    expect(podcastEpisode).toBeInTheDocument();
    expect(podcastSeason).toBeInTheDocument();
});

test('Podcast component renders correctly with invalid data', async () => {
    const episodeTitle = "Test Episode";
    const episode = 5;
    const season = "one";
    render(<Podcast episodeTitle={ episodeTitle} season={season} episode={episode}/>);
    const podcastTitle = await screen.findByText(episodeTitle);
    const podcastEpisode = await screen.findByText(`Episode ${episode}`);
    const podcastSeason = screen.queryByText(`Season ${season}`);
    expect(podcastTitle).toBeInTheDocument();
    expect(podcastEpisode).toBeInTheDocument();
    expect(podcastSeason).not.toBeInTheDocument();
});

