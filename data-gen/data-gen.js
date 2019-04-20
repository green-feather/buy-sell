const Faker = require('faker');
const fs = require('fs');
function genFakePrice() {
  return Faker.finance.amount(10.00, 400.00);
}
let tickers = [];

// function to gen the array of all the tickers up to 10 mil
function genDummyRecords() {
  for (var i = 0; i < 26; i++) {
    let chr_1 = String.fromCharCode(65 + i);
    for (var j = 0; j < 26; j++) {
      let chr_2 = String.fromCharCode(65 + j);
      for (var k = 0; k < 26; k++) {
        let chr_3 = String.fromCharCode(65 + k);
        for (var l = 0; l < 26; l++) {
          let chr_4 = String.fromCharCode(65 + l);
          for (var m = 0; m < 26; m++) {
            let chr_5 = String.fromCharCode(65 + m);
            let ticker = chr_1 + chr_2 + chr_3 + chr_4 + chr_5;
            tickers.push(ticker);
          }
        }
      }
    }
  }
}
genDummyRecords();
function writeOneMillionTimes(tickers) {
  let stream = fs.createWriteStream('./data1.csv');
  let i = 0;
  const max = 10000000;
  write();
  function write() {

    let ok = true;
    do {
      let id = i + 1;
      let price = genFakePrice();
      let ticker = tickers[i];
      let record = `${id}|${ticker}|${price}\n`;
      if (i === max - 1) {
        // last time!
        stream.write(record);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = stream.write(record);
      }
      i++;
    } while (i < max && ok);
    if (i < max) {
      // had to stop early!
      // write some more once it drains
      stream.once('drain', write);
    }
  }
}
writeOneMillionTimes(tickers);