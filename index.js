const express = require("express");
const app = express();
const logger = require('morgan');
const path = require('path');
const PORT = 8888;

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => res.sendFile(__dirname, './public/index.html'));

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
