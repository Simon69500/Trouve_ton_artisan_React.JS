var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sequelize = require('./config/sequelize');
const cors = require('cors');

const categoryRouter = require('./routes/routeCategory');
const artisansRouter = require('./routes/routeArtisan');
const contactRouter = require('./routes/routeContact');


var app = express();

app.get('/', (req, res) => {
  console.log('Route / atteinte');
  res.send('🚀 Backend trouvé ! Bienvenue sur Trouve Ton Artisan');
});

app.use(cors({
  origin: ['https://trouve-ton-artisan-bl0v.onrender.com', 'http://localhost:3000'],
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

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, ()=> {
    console.log(`🚀 Serveur backend lancé sur le port ${PORT}`)
});

module.exports = app;
