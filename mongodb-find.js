const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApps', (err, client) => {
  if (err) {
    return console.log('Not able to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApps');

  db.collection('Todos').find({completed: false}).toArray().then( (res) => {
    console.log(res);
  }).catch( (e) => {
    if(e) {
      console.log(e);
    }
  });

  client.close();
});
