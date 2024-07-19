const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/mydatabase';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log('Database connected!');
  // Insert HTML data into MongoDB collection
  db.close();
});
