const express = require('express');
const exphbs = require('express-handlebars');
const session = require("express-session");
const bodyParser = require('body-parser');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// Express Session Middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }))

//Index Route
app.get('/', (req,res) => {
    res.render('index');
});

//About Us Route
app.get('/aboutus', (req, res) =>{
    res.render('aboutus');
});

const port = 5000;

app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});