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
    {
        id: 4,
        version: 1,
        yt_id: 'vvXe29wJVi8',
        title: 'Rock Classics #1',
        songs: [
            {
                id: uuidv4(),
                guess: [14, 26],
                answer: [26, 32],
                answers: ["Queen - We Will Rock You", "Guns N' Roses - Sweet Child O' Mine", "Deep Purple - Smoke on the Water", "Joe Cocker - You Can Leave Your Hat On"],
                rightAnswer: "Queen - We Will Rock You"
            },
            {
                id: uuidv4(),
                guess: [32, 44],
                answer: [44, 50],
                answers: ["Guns N' Roses - Sweet Child O' Mine", "The Rolling Stones - Satisfaction", "Black Sabbath - Paranoid", "Bryan Adams - Summer of 69"],
                rightAnswer: "Guns N' Roses - Sweet Child O' Mine"
            },
            {
                id: uuidv4(),
                guess: [51, 62],
                answer: [62, 69],
                answers: ["Deep Purple - Smoke on the Water", "Van Halen - Jump", "Black Sabbath - Paranoid", "Metallica - Nothing Else Matters"],
                rightAnswer: "Deep Purple - Smoke on the Water"
            },
            {
                id: uuidv4(),
                guess: [69, 80],
                answer: [80, 86],
                answers: ["Dire Straits - Walk of Life", "Van Halen - Jump", "Metallica - Nothing Else Matters", "Joe Cocker - You Can Leave Your Hat On"],
                rightAnswer: "Dire Straits - Walk of Life"
            },
            {
                id: uuidv4(),
                guess: [86, 99],
                answer: [99, 106],
                answers: ["David Bowie - Heroes", "Black Sabbath - Paranoid", "Bryan Adams - Summer of 69", "The Rolling Stones - Satisfaction"],
                rightAnswer: "David Bowie - Heroes"
            },
            {
                id: uuidv4(),
                guess: [106, 119],
                answer: [119, 126],
                answers: ["Bon Jovi - It's My Life", "Black Sabbath - Paranoid", "Eric Clapton - Cocaine", "Van Halen - Jump"],
                rightAnswer: "Bon Jovi - It's My Life"
            },
            {
                id: uuidv4(),
                guess: [126, 138],
                answer: [138, 145],
                answers: ["Whitesnake - Here I Go Again", "The Rolling Stones - Satisfaction", "Metallica - Nothing Else Matters", "Van Halen - Jump"],
                rightAnswer: "Whitesnake - Here I Go Again"
            },
            {
                id: uuidv4(),
                guess: [145, 158],
                answer: [158, 165],
                answers: ["KISS - I Was Made For Lovin' You", "Metallica - Nothing Else Matters", "Bryan Adams - Summer of 69", "Queen - We Will Rock You"],
                rightAnswer: "KISS - I Was Made For Lovin' You"
            },
            {
                id: uuidv4(),
                guess: [165, 176],
                answer: [176, 182],
                answers: ["Joe Cocker - You Can Leave Your Hat On", "Eric Clapton - Cocaine", "Queen - We Will Rock You", "Metallica - Nothing Else Matters"],
                rightAnswer: "Joe Cocker - You Can Leave Your Hat On"
            },
            {
                id: uuidv4(),
                guess: [182, 196],
                answer: [196, 202],
                answers: ["Metallica - Nothing Else Matters", "Guns N' Roses - Sweet Child O' Mine", "Eric Clapton - Cocaine", "The Rolling Stones - Satisfaction"],
                rightAnswer: "Metallica - Nothing Else Matters"
            },
            {
                id: uuidv4(),
                guess: [202, 216],
                answer: [216, 224],
                answers: ["Eric Clapton - Cocaine", "Queen - We Will Rock You", "Guns N' Roses - Sweet Child O' Mine", "Bryan Adams - Summer of 69"],
                rightAnswer: "Eric Clapton - Cocaine"
            },
            {
                id: uuidv4(),
                guess: [224, 239],
                answer: [239, 245],
                answers: ["The Rolling Stones - Satisfaction", "Guns N' Roses - Sweet Child O' Mine", "Deep Purple - Smoke on the Water", "Whitesnake - Here I Go Again"],
                rightAnswer: "The Rolling Stones - Satisfaction"
            },
            {
                id: uuidv4(),
                guess: [245, 260],
                answer: [260, 266],
                answers: ["Van Halen - Jump", "Guns N' Roses - Sweet Child O' Mine", "Deep Purple - Smoke on the Water", "Bryan Adams - Summer of 69"],
                rightAnswer: "Van Halen - Jump"
            },
            {
                id: uuidv4(),
                guess: [266, 282],
                answer: [282, 247],
                answers: ["Black Sabbath - Paranoid", "Deep Purple - Smoke on the Water", "Dire Straits - Walk of Life", "Whitesnake - Here I Go Again"],
                rightAnswer: "Black Sabbath - Paranoid"
            },
            {
                id: uuidv4(),
                guess: [247, 304],
                answer: [304, 313],
                answers: ["Bryan Adams - Summer of 69", "Dire Straits - Walk of Life", "Eric Clapton - Cocaine", "Deep Purple - Smoke on the Water"],
                rightAnswer: "Bryan Adams - Summer of 69"
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