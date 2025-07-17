var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const categoryRouter = require('./routes/routeCategory');
const artisansRouter = require('./routes/routeArtisan');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/artisans', artisansRouter)

const PORT = 5000
app.listen(PORT, ()=> {
    console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`)
});

module.exports = app;
