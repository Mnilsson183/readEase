const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.text());

app.post('/', (req, res) =>{
    console.log('Received data:', req.body);
    res.send('data received');
});

app.listen(port, () =>{
    console.log("server started on port " + port);
});