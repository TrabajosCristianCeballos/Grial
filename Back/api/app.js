    //LIBRARIES
    var createError = require('http-errors');
    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');
    //ROUTES
    var indexRouter = require('./routes/index');
    var usersRouter = require('./routes/users');
    var product = require('./routes/product');
    /////SET UP MONGOOOSE


    // Set up mongoose connection
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://xltiagoxl:vZNyWJrY7wybR1QnkKNYOy47QKc6Utg80CyE1SIklhUD3eQ0hnWjdG4qjsJciKkQDJHwmH4lM3GF9vxiKyy1iw==@xltiagoxl.documents.azure.com:10255/?ssl=true', { useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once("open", function () {
       console.log("IS CONNECTED::: TRUE")
    });
    //////////////
    // SET UP MySql Connection
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host     : 'grialdbl.cvzb1l5sgvxf.us-east-1.rds.amazonaws.com',
        user     : 'xltiagoxl',
        password : 'santii14',
        port     : 3306,
        database : 'griallogin'
    });

    connection.connect(function(err) {
        if (err) {
            console.error('Database connection failed: ' + err.stack);
            return;
        }

        console.log('Connected to database.');
    });

    connection.end();

    /////////////

    let app = express();

    app.use(require("body-parser").json())
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/products', product);

    //console.log(product);
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
