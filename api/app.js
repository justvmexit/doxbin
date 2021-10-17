const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const config = require('./config.json');

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.listen(config.port, () => {
    console.log('started listening on port %d', config.port);

    const database = require('./database')(config);

    const routes = require('./routes')(app, database);
});