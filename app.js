const path = require('path');

const config = require('./config');
const logger = require('morgan');
const express = require('express');
const session = require('express-session');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const sessionStore = require('./libs/sessionStore');

const index = require('./routes/index');
const login = require('./routes/login');
const ad = require('./routes/ad');

const adApi = require('./routes/api/ad');

const app = express();

// view engine setup
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// сессии для авторизации
// app.use(session(Object.assign({
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false
// }, config.get('session'))));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/', login);
app.use('/ad', ad);

app.use('/api/ad', adApi);
app.all('*', (req, res) => {
    res.redirect('/');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
