var express = require('express');
var bodyParser  = require('body-parser');
var cors = require('cors');

// mongoose/mongoDB dependencies
// var mongoose = require('mongoose');
// var db = require('../database-mongodb/index.js');
// var Stock = require('../database-mongodb/Stock.js');

// postgres/sequalize dependencies
const db = require('../database-postgres/index.js');
var port = 8080;
var app = express();

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public/'));

/* ROUTE HANDLERS */
app.get('/stocks/:stockId', (request, response) => {
    const id = request.params.stockId;
/* POSTGRES SECTION */
    db.query('SELECT * FROM stocks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
})
// POSTS new stock to the DB
app.post('/stocks/:stockId', (req, res) => {
    const id = request.params.stockId;
    res.status(200).json(stockId);
})
// PATCHES currentPrice for existing stock within the DB
app.patch('/stocks/:stockId', (req, res) => {
    const stockId = req.paidrams.query;
    res.status(200).json(stockId);
})
// DELETES stock from the DB
app.delete('/stocks/:stockId', (req, res) => {
    const stockId = req.params.query;
    res.status(200).json(stockId);

})
app.listen(port, () => {
    console.log('Server listening on port ', port);
})
