const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'buysell'
});

const createTableQuery = 'CREATE TABLE buysell.stocks ( id int PRIMARY KEY, ticker text, currentPrice float);';
client.execute(createTableQuery)
  .then(() => {
    console.log('uhh i guess we created the table');
    process.exit();
  });
// const query = 'SELECT name, email FROM users WHERE key = ?';
