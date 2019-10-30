const express = require('express');
const app = express();
const port = process.env.port || 80;

app.get('/test', (req, res) =>
    res.send("testing")
);

app.listen(port, () => console.log('Example app listening on port ' + port));