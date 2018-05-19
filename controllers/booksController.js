var express = require('express');
var booksRepo = require('../repos/booksRepo');

var router = express.Router();


router.get('/add', (req, res) => {
    res.render('book/books_add');
});


router.get('/', (req, res) => {
    booksRepo.loadAll().then(rows => {
        var vm = {
            books: rows
        };
        res.render('book/books_view', vm);
    });
});

router.post('/add', (req, res) => {
    console.log(req.body);
    booksRepo.add(req.body).then(value => {
        // var vm = {
        //     showAlert: true
        // };
        res.render('book/books_add');
    }).catch(err => {
        res.end('fail');
    });
});

module.exports = router;