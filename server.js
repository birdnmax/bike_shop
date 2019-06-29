const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const path = require('path');
const authentication = require('./server/authentication');
require('dotenv').config();
const product = require('./server/product');

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

app.get('/api/ping', (req, res) => {
    res.send('healthy');
});

app.use('/api/*', (req, res, next) => {
    //check to see if user is still logged in. 
    if(!req.session.user){
        res.send({success:false, message:'please login'})
    }else{
        next();
    }

})

app.get('/api/bikes', product.getAll)
app.get('/api/bike/:id', product.getProductById)

app.post('/auth/login', authentication.login)
app.post('/auth/register', authentication.register)
app.post('/auth/logout', authentication.logout)
app.get('/auth/user', authentication.isLoggedIn)

// app.get('/*', (req, res) => {
//     res.sendFile('index.html', {
//         root: path.join(__dirname, "build")
//     })
// });

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})