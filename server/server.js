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

app.get('/stocks/:query', (req, res) => {
    const ticker = req.params.query;
    /* POSTGRES SECTION */
    let pgQueryStr = `SELECT ${ticker} FROM test;`;
    pool.query(pgQueryStr, (err, res) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    })

    /* MONGOOSE SECTION */
    // var dbQuery = {ticker : req.params.query}
    //  if(parseInt(query)) {
    //      dbQuery = {id : req.params.query}
    //  }
    // Stock.find(dbQuery, (err, data) => {
    //     if(err) { 
    //         throw err;
    //     }
    //         res.send(JSON.stringify(data))
    // });
    
})


app.listen(port, () => {
    console.log('Server listening on port ', port);
})
