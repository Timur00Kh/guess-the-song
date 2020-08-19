import { v4 as uuidv4 } from 'uuid';

const games = [
    {
        id: 1,
        version: 1,
        yt_id: '5QeR1SDce4c',
        songs: [
            {
                id: uuidv4(),
                guess: [18, 28],
                answer: [28, 36],
                answers: ["song1", "song2", "song3", "song4"],
                rightAnswer: "song3"
            },
            {
                id: uuidv4(),
                guess: [28, 42],
                answer: [42, 46],
                answers: ["song10", "song12", "song13", "song14"],
                rightAnswer: "song3"
            },
        ]
    },
    {
        id: 2,
        version: 1,
        yt_id: '0nfKTF4A9MQ',
        songs: [
            {
                id: uuidv4(),
                guess: [18, 28],
                answer: [28, 36],
                answers: ["song5", "song6", "song7", "song8"],
                rightAnswer: "song5"
            },
        ],
    },
    {
        id: 3,
        version: 1,
        yt_id: 'AsnbFdZi54E',
        songs: [
            {
                id: uuidv4(),
                guess: [13, 21],
                answer: [21, 32],
                answers: ["Pharell Williams - Happy (2013)", "song6", "song7", "song8"],
                rightAnswer: "Pharell Williams - Happy (2013)"
            },
            {
                id: uuidv4(),
                guess: [32, 41],
                answer: [41, 52],
                answers: ["Eminem & Rihanna - Love The Way You Lie (2010)", "song6", "song7", "song8"],
                rightAnswer: "Eminem & Rihanna - Love The Way You Lie (2010)"
            },
        ],
    },
]

export async function get(req, res, next) {
    // у нас есть доступ к параметру `slug`, потому что
    // файл называется [slug].json.js
    const { id } = req.params;

    const game = games.find(e => e.id == id);

    if (game !== null) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(game));
    } else {
        next();
    }
}