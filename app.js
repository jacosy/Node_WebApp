const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  console.log(path.join(__dirname, '/views/index.html'));
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, () => {
  console.log(`WebApp is running, Listening port 3000`);
});