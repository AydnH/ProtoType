const express = require('express');
const debug = require('debug')('ga-pwn');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  debug(`Example app listening on port ${port}!`);

});
