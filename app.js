var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* ref routes*/
var UsuariosRouter = require('./routes/rest_usuarios')
var GastosxcatRouter = require('./routes/rest_gastosxcat')

/* REFERENCIA AL MÓDULO */
const swaggerUi = require('swagger-ui-express')

/* REFERENCIA AL ARCHIVO GENERADO */
const swaggerFile = require('./swagger_output.json')

var app = express();
app.use(cors())


/* CONFIGURACIÓN DE LA RUTA A LA DOCUMENTACIÓN */
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/* relacion ruta url con  manejador de rutas */
app.use('/rest/usuarios',UsuariosRouter)
app.use('/rest/gastosxcat',GastosxcatRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
