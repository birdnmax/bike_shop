const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const path = require('path');
require('dotenv');

const app = express();

massive(process.env.DATABASE_URL)
    .then((dbInstance) => {
        app.set('db', dbInstance)
        console.log('db is connected')
    })
app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 6000}
}));

app.use(express.static(path.join(__dirname, '/build')));

app.get('api/ping', (req, res) => {
    res.send('healthy');
});



app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, "build")
    })
});

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})