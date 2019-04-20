//  gunzip -c data-gen/test.gz | node data-gen/data-extract-load-mongo.js
// to clear collection  - db.stocks.remove({})
const readline = require('readline');
const fs = require('fs');
const es = require('event-stream');
const db = require('../database-mongodb/index.js');
const Stock = require('../database-mongodb/Stock.js');


console.log('running');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let data = [];
rl.on('line', function (batchLine) {
  batchLine = JSON.parse(batchLine);
  data.push(batchLine);
  Stock.insertMany(batchLine)
    .catch((err) => console.log(err))
    .then(() => {
      // db.close();
    });
});


