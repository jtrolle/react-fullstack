import express from 'express';

let app = express();

app.get('*/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(8080, () => console.log('Running on http://localhost:8080'));