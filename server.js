const express = require('express');
const test = require('./test.js');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 80;

app.get('/test', (req, res) => {
    res.send(test());
});

app.listen(port, () => console.log('Example app listening on port ' + port));