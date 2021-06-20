const express = require('express');
const morgan = require('morgan');
const exphbs = require("express-handlebars");
const path = require('path');
// initialization
const app = express();

//settings 
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));
app.engine(',hbs',exphbs({
    defaultLayout : 'main',
    layoutsDir : path.join(app.get('views'),'layouts'),
    partialsDir : path.join(app.get('views'),'partials'),
    extname : '.hbs',
    helpers : require('./lib/handlebars')
}));
app.set('view engine','.hbs');
// Middiwares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//Global Variables



//Routes
app.use(require('./routes'));

//Public 

// Staring the server
app.listen(app.get('port'), ()=>{
    console.log("server on port ", app.get('port'));
})