var express = require('express');
var booksRepo = require('../repos/booksRepo');
var yyyymmdd = require('yyyy-mm-dd');

var router = express.Router();


router.get('/add', (req, res) => {
    res.render('book/books_add');
});


router.get('/', (req, res) => {
    booksRepo.loadAll().then(rows => {
        for(var i = 0; i<rows.length; i++){
            rows[i].Purchase_Date = yyyymmdd(rows[i].Purchase_Date);  
        }
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


router.get('/detail', (req, res) => {
    booksRepo.single(req.query.id).then(rows => {
        // console.log(rows[0]);
        rows[0].Purchase_Date = yyyymmdd(rows[0].Purchase_Date);
        var vm = {
            book: rows[0]
        };
        res.render('book/books_detail', vm);        
    });
});


router.post('/edit', (req, res) => {
    booksRepo.update(req.body).then(value => {
        res.redirect('/book');
    });
});


router.post('/delete', (req, res) => {
    console.log(req.body.id);
    booksRepo.delete(req.body.id).then(value => {
        res.redirect('/book');
    });
});


module.exports = router;