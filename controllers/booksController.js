var express = require('express');
var booksRepo = require('../repos/booksRepo');

var router = express.Router();




router.get('/', (req, res) => {
    booksRepo.loadAll().then(rows => {
        var vm = {
            books: rows
        };
        res.render('book/books_view', vm);
    });
});



module.exports = router;