const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApps', (err, client) => {
  if (err) {
    return console.log('Not able to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApps');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log(result.ops);
  // })

  db.collection('Users').insertOne({
    name: 'John',
    age: 26,
    location: 'Greece'
  }, (err, results) => {
    if (err) {
      return console.log(err);
    }
    console.log(results.ops);
  })

  client.close();
});
