const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const home = require('./routes/home');
const courses = require('./routes/courses');
const express = require('express');
const app = express();

console.log(`App: ${config.get('name')}`);
console.log(`Mail: ${config.get('mail.host')}`);
console.log(`Password: ${config.get('mail.password')}`);

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.static('public'));
app.use(helmet());
app.use('/', home);
app.use('/api/courses', courses);

if (app.get('env') === 'development'){
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...');
}

app.use(logger);
app.use(function(req, res, next) {
    startupDebugger('Authenticating...');
    next();
});

dbDebugger('Connected to the database...');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
