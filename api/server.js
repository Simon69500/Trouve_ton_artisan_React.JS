var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sequelize = require('./config/sequelize');
const cors = require('cors');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });
console.log('DB_HOST:', process.env.DB_HOST);


const categoryRouter = require('./routes/routeCategory');
const artisansRouter = require('./routes/routeArtisan');
const contactRouter = require('./routes/routeContact');


var app = express();

const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:3000';

app.use(cors({
  origin: allowedOrigin,
  methods: ['GET', 'POST'], 
  credentials: false, 
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/categories', categoryRouter);
app.use('/artisans', artisansRouter);
app.use('/contact', contactRouter);

sequelize.sync()
    .then(() => console.log('Base synchronisée'))
    .catch(err => console.error('Erreur de synchro BDD', err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'artisan_react_js/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'artisan_react_js/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, ()=> {
    console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`)
});

module.exports = app;
