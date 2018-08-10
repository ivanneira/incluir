var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/*
//url del sevidor
server_url = "/aresapi";
server_host = "http://gedoc.sanjuan.gob.ar";
server_port = 80;
*/
/*
//para evitar error de CORS
server_url = "/aresapi";
server_host = "http://200.0.236.210";
server_port = 80;
*/

//url de api en desarrollo
server_url = "";
server_host = "http://192.168.3.105";
server_port = 45457;


  knex = require('knex')({
    client: 'mssql',
    connection: {
        host : '10.64.65.200',
        port: 5000,
        user : 'sa',
        password : 'Alamitos+2016',
        database : 'MSP-IncluirSalud'
    },
    debug: false,
    pool: { min: 0, max: 40 }
});

//express-session
var session = require('express-session');


var index = require('./routes/index');
//var users = require('./routes/users');
var dashboard = require('./routes/dashboard');
var planillas = require('./routes/planillas');
var estadisticas = require('./routes/estadisticas');

var excel = require('./routes/excel');

var registro = require('./routes/registro');
var registroEncuesta = require('./routes/registroEncuesta');


var trylogin = require('./routes/trylogin');

var logout  = require('./routes/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//ruta de jquery
app.use(express.static(path.join(__dirname, '/node_modules/jquery/dist')));

//ruta de font awesome
app.use(express.static(path.join(__dirname, '/node_modules/font-awesome')));

//ruta de material design
app.use(express.static(path.join(__dirname, '/node_modules/material-design-lite')));

//ruta de bootstrap
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));

//ruta de popper
app.use(express.static(path.join(__dirname, '/node_modules/popper.js/dist/')));

//ruta de bootstrap-datepicker
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap-datepicker/dist')));

//ruta de select2
app.use(express.static(path.join(__dirname, '/node_modules/select2/dist')));

//ruta de async
app.use(express.static(path.join(__dirname, '/node_modules/async/dist')));

//ruta de jAlert
app.use(express.static(path.join(__dirname, '/node_modules/sweetalert/dist')));

//ruta de inputmask
app.use(express.static(path.join(__dirname, '/node_modules/inputmask/dist')));

//ruta de datatables
app.use(express.static(path.join(__dirname, '/node_modules/datatables/media')));
app.use(express.static(path.join(__dirname, '/node_modules/datatables.net-bs4')));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '/public/images', 'incluir_icon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//express session
app.use(session({resave: true, saveUninitialized: true, secret: 'shhhh', cookie: { maxAge: null }}));

app.use('/', index);
//app.use('/users', users);
app.use('/dashboard', dashboard);
app.use('/planillas', planillas);

app.use('/registro', registro);
app.use('/registroEncuesta', registroEncuesta);

app.use('/trylogin', trylogin);
app.use('/logout', logout);
app.use('/estadisticas', estadisticas);

app.use('/excel', excel);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

