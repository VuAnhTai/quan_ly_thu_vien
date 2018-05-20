var express = require('express');
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');

var usersController = require('./controllers/usersController');
var homeController = require('./controllers/homeController');
var newspapersController = require('./controllers/newspapersController');
var magazinesController = require('./controllers/magazinesController');


    


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



app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use('/home', homeController);
app.use('/newspaper', newspapersController);
app.use('/user', usersController);
// app.use('/books', booksControllers);
 app.use('/magazine', magazinesController);
// app.use('/returns', returnsControllers);
// app.use('/issues', issuesControllers);

app.listen(3000, () => {
    console.log('server running on port 3000');
});