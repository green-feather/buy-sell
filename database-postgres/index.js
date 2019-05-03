const { Pool } = require('pg')
const pool = new Pool({
  user: 'power_user',
  host: '127.0.0.1',
  database: 'test',
  password: 'poweruserpassword',
  port: 5432
})
pool.connect((err, client, done) => {
if (err) return console.log(err)
console.log("success")
})
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}
