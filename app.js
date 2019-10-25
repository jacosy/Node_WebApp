const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.get('/', (req, res) => {
  console.log(path.join(__dirname, '/views/index.html'));
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, () => {
  console.log(`WebApp is running, Listening port 3000`);
});