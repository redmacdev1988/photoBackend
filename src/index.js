
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import uuidv4 from 'uuid/v4';
import fs from 'fs';
var path = require('path');


console.log('------ start -------');


var files = fs.readdirSync('daily-photos/');
var arrOfObjects = [];
files.map(function(value, index) {
  arrOfObjects.push({
    title: value,
    url:  'http://localhost:6680/daily-photos/' + value
  })
});
let arrStr = JSON.stringify(arrOfObjects);
let photoObj = `{"name": "My Daily Photos", "array": ${arrStr}}`;
let jsonResult = JSON.parse(photoObj);
//console.log('---- json results ------');
//console.log(jsonResult);

const app = express();
//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}`)
);

app.get('/', (req, res) => {
  console.log('starting up the app');
  return res.send(JSON.stringify(jsonResult));
});

app.get('/test', (req, res) => {
  return res.send('GET HTTP method on test resource');
});

app.get('/users', (req, res) => {
  return res.send('GET HTTP method on user resource');
});

app.get('/daily-photos/:fileName', (req, res) => {
  console.log(`------ you want file ------ ${req.params.fileName}`);
  return res.sendFile(path.resolve(`daily-photos/${req.params.fileName}`));
});

// ASC 
// DESC
app.get('/photos/:sort', (req, res) => {

  console.log(req.params.sort);

  const sortString = req.params.sort.toUpperCase();

  if (sortString === 'ASC' || sortString === 'ASCENDING') {
    return res.send(
      `GET avl tree with ${req.params.sort} titles`
    );
  } else if (sortString === 'DESC' || sortString === 'DESCENDING') {
    return res.send(
      `GET avl tree with ${req.params.sort} titles`
    );
  }

  return res.send('GET HTTP method on user resource');
});
  
  app.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
  });
  
  app.post('/messages', (req, res) => {
    console.log(`POST on url /messages`);
    console.log(req.body);
    const id = uuidv4();
    const message = {
      id,
    };
    message[id] = 'hadooooooken!';
    return res.send(message);
  });

  app.put('/users', (req, res) => {
    return res.send('PUT HTTP method on user resource');
  });
  
  app.delete('/users/:userId', (req, res) => {
    return res.send(
        `DELETE HTTP method on user/${req.params.userId} resource`
    );
  });

