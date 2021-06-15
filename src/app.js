import express from 'express';
import morgan from 'morgan';
const port = process.env.PORT || 3050;
const cors = require('cors');

const app = express();

app.set('port', port);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public', express.static(`${__dirname}/storage`))

app.use(require('./routes/routes.users'));
app.use(require('./routes/routes.recetas'));
app.use(require('./routes/routes.joins'));

module.exports = app;
