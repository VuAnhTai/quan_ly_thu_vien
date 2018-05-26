<<<<<<< HEAD
var express = require('express');
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');
var cleanUrls = require('clean-urls');
// var wnumb = require('wnumb');

var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var handle404MDW = require('./middle-wares/handle404'),
    handleLayoutMDW = require('./middle-wares/handleLayout'),
    restrict = require('./middle-wares/restrict');

var usersController = require('./controllers/usersController'),
    homeController = require('./controllers/homeController'),
    newspapersController = require('./controllers/newspapersController'),
    magazinesController = require('./controllers/magazinesController'),
    accountController = require('./controllers/accountController'),
    booksController = require('./controllers/booksController'),
    issuedController = require('./controllers/issuedController');
    

var app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/_layouts/',
    helpers: {
        section: exphbs_section()
    }
}));
app.set('view engine', 'hbs');

app.use(express.static(
    path.resolve(__dirname, 'public')
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var sessionStore = new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'saide_db',
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
});

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.use(handleLayoutMDW);

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use('/account', accountController);
app.use('/home', restrict, homeController);
app.use('/newspaper', restrict, newspapersController);
app.use('/user', restrict, usersController);
app.use('/magazine', restrict, magazinesController);
app.use('/book', restrict, booksController);
app.use('/issued', restrict, issuedController);
// app.use('/returns', returnsControllers);

app.use(handle404MDW);

app.listen(3000, () => {
    console.log('server running on port 3000');
=======
var express = require('express');
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');

var usersController = require('./controllers/usersController');
var homeController = require('./controllers/homeController');
var newspapersController = require('./controllers/newspapersController');

var magazinesController = require('./controllers/magazinesController');



var booksController = require('./controllers/booksController');
var issuedController = require('./controllers/issuedController');
var returnedController = require('./controllers/returnedController');

    


var app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/_layouts/',
    helpers: {
        section: exphbs_section()
    }
}));
app.set('view engine', 'hbs');

app.use(express.static(
    path.resolve(__dirname, 'public')
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use('/home', homeController);
app.use('/newspaper', newspapersController);
app.use('/user', usersController);
// app.use('/books', booksControllers);
 app.use('/magazines', magazinesController);

 app.use('/book', booksController);
// app.use('/magazines', magazinesControllers);
app.use('/returned', returnedController);
app.use('/issued', issuedController);

app.listen(3000, () => {
    console.log('server running on port 3000');
>>>>>>> 37ca41d77f89732d1ee580235941ba4525161f9a
});