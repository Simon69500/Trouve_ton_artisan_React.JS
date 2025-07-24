var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const categoryRouter = require('./routes/routeCategory');
const artisansRouter = require('./routes/routeArtisan');
const contactRouter = require('./routes/routeContact');

const sequelize = require('./config/sequelize');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/categories', categoryRouter);
app.use('/api/artisans', artisansRouter);
app.use('/send', contactRouter);

sequelize.sync()
    .then(() => console.log('Base synchronisée'))
    .catch(err => console.error('Erreur de synchro BDD', err));

const PORT = 5000
app.listen(PORT, ()=> {
    console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`)
});

module.exports = app;
