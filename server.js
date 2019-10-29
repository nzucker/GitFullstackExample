const express = require('express');
const app = express();
const port = 4242;

app.get('/test', (req, res) =>
    res.send("testing")
);

app.listen(port, () => console.log('Example app listening on port ' + port));