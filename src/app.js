const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3050;

const app = express();

app.set('port', port);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public', express.static(`${__dirname}/storage`))

app.use(require('./routes/routes.users'));
app.use(require('./routes/routes.recetas'));

module.exports = app;
