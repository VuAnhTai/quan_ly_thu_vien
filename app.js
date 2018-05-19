var express = require('express');
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');

var usersControllers = require('./controllers/usersController');

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

app.use('/user', usersControllers);
// app.use('/book', bookControllers);
// app.use('/magazine', magazineControllers);
// app.use('/newspaper', newspaperControllers);
// app.use('/return', returnControllers);
// app.use('/issue', issueControllers);

app.listen(3000, () => {
    console.log('server running on port 3000');
});