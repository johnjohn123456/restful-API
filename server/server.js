const { mongoose } = require('./db/db');
const {ObjectID} = require('mongodb');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser());

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then( (docs) => {
    res.send(docs);
  }).catch( (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then( (todos) => {
    res.send({todos});
  }).catch( (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id)) {
    res.status(404).send('Invalid id');
  }

  User.findById(id).then( (user) => {
    if(!user) {
      res.status(404).send([]);
    }
    res.status(200).send(user);
  }).catch( (e) => {
    res.status(400).send([]);
  })
})

app.listen(3000, () => {
  console.log('server is running on port');
});
