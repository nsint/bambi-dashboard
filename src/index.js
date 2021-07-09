const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, 'static')));
const PORT = app.get('port');

// Middlewares
app.use(morgan('dev'));

// Routes


// Starting Server
app.listen(PORT, () => console.log("Eschuchando en el puerto", PORT));