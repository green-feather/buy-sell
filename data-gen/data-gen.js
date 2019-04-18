// gunzip -c data.gz | node data-gen/data-extract.js
testData = genDummyRecords();
console.log(testData);

function genDummyRecords() {
  let id = 0;
  // let count = 0;
  let records = [];
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
            id += 1;
            let data = {
              id: id,
              ticker: ticker
            }
            records.push(data);
            // count++;
            // if (count > 1000) {
            //   return JSON.stringify(records);
            // }
          }
        }
      }
    }
  }
  return JSON.stringify(records);
}