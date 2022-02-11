const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors()) 

//Ejecuto el llamado a mis rutas
const routes = require('./routes/adminRoutes');

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false })) 

app.use(bodyParser.json());

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use('/api', routes);

//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto http://localhost:3001/'));