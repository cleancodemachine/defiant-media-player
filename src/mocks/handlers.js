import { http, HttpResponse } from "msw";

export const handlers = [
    // Handles a GET request
    http.get('http://localhost:3001/tracks', () => {
        return HttpResponse.json(
            [
                {
                    "title": "Billie Jean",
                    "artist": "Michael Jackson",
                    "year": 1983
                },
                {
                    "title": "Smells Like Teen Spirit",
                    "artist": "Nirvana",
                    "year": 1991
                },
                {
                    "artist": "Rick Astley",
                    "year": 1987,
                    "title": "Never Gonna Give You Up"
                },
                {
                    "episode": 360,
                    "episodeTitle": "Switched at Birth"
                },
                {
                    "season": 7,
                    "episode": 2,
                    "episodeTitle": "How to Fail: Malcolm Gladwell"
                },
                {
                    "episode": 5,
                    "season": 1,
                    "episodeTitle": "Route Talk"
                },
            ]
        )
    }),
];