import express from 'express';

const app = express();

const PORT = process.env.PORT || 8000;

const jokes = [
    {
        id: 1,
        title: 'First Joke',
        content: 'I am cool'
    },
    {
        id: 2,
        title: 'Second Joke',
        content: 'am I cool ?'
    },
    {
        id: 3,
        title: 'Third Joke',
        content: 'I am kinda cool'
    },
    {
        id: 4,
        title: 'Fourth Joke',
        content: 'I am fucking cool'
    },
    {
        id: 5,
        title: 'Fifth Joke',
        content: 'I am not so cool'
    }
];



app.get('/', (req, res) => {
    res.send('Welcome to Homepage');
})

app.get('/jokes', (req, res) => {
    res.send(jokes);
})

app.listen(PORT);