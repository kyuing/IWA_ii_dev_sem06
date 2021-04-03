/**
 * [npm modules intalled]
 * npm init
 * npm i --save nodemon / npm i -g nodemon (global but needs to install every time) / npm i -g --save nodemon (else)
 * npm i --save axios
 * npm i --save morgan cors express body-parser
 * npm i -save mongoose
 * npm i --save multer fs path del
 * npm i --save express-prettify
 * 
 * [some other useful npm commands]
 * npm i connect
 * pkill -f node
 * 
 * 02042021
 * npm init
 * npm i -save nodemon axios morgan cors express body-parser mongoose multer fs path del
 * 
 * [To run index.js, on terminal based on pwd is /] 
 * npm start
 * 
 */

const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'); //mongoose module to use mongodb

//var pretty = require('express-prettify');

var app = express();
var port = 8000;


 

// Middlewares 
app.use(bodyParser.json());
//app.use(pretty({ query: 'pretty' }));
app.use(logger('tiny'));   // app.use(logger('dev'));
app.use(require('./routes'));  //import routes.js

//port 8000
app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

//mongodb atlas connection
//https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas
//mongodb+srv://<username>:<password>@"<clustername>.mongodb.net/<dbnameToCreateOrUse>?retryWrites=true&w=majority
const dbURI = "mongodb+srv://<username>:<password>@"<clustername>.mongodb.net/<dbnameToCreateOrUse>?retryWrites=true&w=majority";
mongoose.connect(dbURI, { 
  useNewUrlParser: true, 
  useFindAndModify: false,
  useUnifiedTopology: true 
}).then((result) => console.log('connected to db')).catch((err) => console.log(err));

/***************************************************************************
//mongodb connection
const dbURI = "mongodb://localhost/test";
//const dbURI = "mongodb://localhost:27017/test";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));
****************************************************************************/
