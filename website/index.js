const createError = require('http-errors');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');

const app = express();

// Set up view engine and static assets.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(favicon(path.join(__dirname, 'static/icon8-favicon.ico')));
app.use('/static', express.static(path.join(__dirname, 'static')));

// // Set up logger.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Load documentation and provide locals.
const documentation = require('./loadDocumentation');
app.use((req, res, next) => {
    console.log('\n\n\nbeing usd\n');
    // console.log(Object.keys(documentation));
    // res.locals.availableDocumentation = Object.keys(documentation).sort();
    next();
});

// Serve homepage.
app.get('/', (req, res) => {
    res.render('home');
});

// Serve documentation.
app.get('/document/*', (req, res, next) => {
    let params = req.params[0].split('/');
    let documentationPath = documentation;
    params.forEach(extension => {
        if (!extension) return;
        extension = extension.replace(/_/gi, ' ');
        documentationPath = documentationPath[extension];
    });
    let documentName = req.params.document;

    let document = documentationPath.text;

    if (document) {
        res.locals.documentationHtml = document;
        res.render('documentation', {filename: documentName, cache: true});
    } else next();
});

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function (error, req, res, next) {
    console.log("In the error handler");
    let {statusCode = 500, message, expose, stack} = error;
    res.locals.statusCode = statusCode;
    res.locals.message = message;
    if (expose || app.get('env') === 'development') res.locals.stack = stack.split(__dirname).join('app');
    res.status(statusCode).render('error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

module.exports = app;
