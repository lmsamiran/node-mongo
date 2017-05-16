var conn = require('mongoose');
conn.connect('mongodb://localhost:27017/node');
module.exports = conn;

