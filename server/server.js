require('newrelic');
require('dotenv').config()
var express = require('express');
var bodyParser  = require('body-parser');
var cors = require('cors');
const path = require('path');

// postgres
const db = require('../database-postgres/index.js');
const stocks = require('./controllers/stocks.js');

var port = 8080;
var app = express();

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// to pass the loader.io verification
app.get('/loaderio-d10429cb800392bd42b087abc1827493/', (req, res) => {
    let address = path.resolve(__dirname, '../loaderio-d10429cb800392bd42b087abc1827493.txt');
    res.sendFile(address);
});

app.use('/:stockId', express.static('../public/'));



// get stock info for the ticker sent within the url
app.get('/api/stocks/:stockId', stocks.getStockInfo);

// create a new record in the db based on the request body
// app.post('/api/stocks', stocks.createStock)

/* 
// PATCHES currentPrice for existing stock within the DB
app.patch('/api/stocks/:stockId', (req, res) => {
    const stockId = req.params.query;
    res.status(200).json(stockId);
})
// DELETES stock from the DB
app.delete('/api/stocks/:stockId', (req, res) => {
    const stockId = req.params.query;
    res.status(200).json(stockId);
})
*/
app.listen(port, () => {
    console.log('Server listening on port ', port);
})

