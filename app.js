const express = require('express');
const app = express();
const config = require('./config/config.js');

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(config.app.port);
