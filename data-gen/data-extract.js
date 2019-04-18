//  gunzip -c data-gen/test.gzt | node data-gen/data-extract.js
// to clear collection  - db.stocks.remove({})
const readline = require('readline');
const db = require('../database-mongodb/index.js');
const Stock = require('../database-mongodb/Stock.js');

console.log('running');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let data = [];
rl.on('line', function (line) {
  line = JSON.parse(line);
  data.push(line);
  console.log(Date.now());
  Stock.insertMany(line)
    .catch((err) => console.log(err))
    .then(() => {
      console.log(Date.now());
      db.close();
      console.log('did this work?');
    });
});
