var express = require('express');
var returnedRepo = require('../repos/returnedRepo');

var router = express.Router();

router.get('/add', (req, res) => {
    res.render('returned/returned_add');
});


router.get('/', (req, res) => {
    returnedRepo.loadAll().then(rows => {
        var vm = {
            return_book: rows
        };
        res.render('returned/returned_view', vm);
    });
});

router.post('/add', (req, res) => {
    returnedRepo.add(req.body).then(value => {
        // var vm = {
        //     showAlert: true
        // };
        res.render('returned/returned_add');
    }).catch(err => {
        res.end('fail');
    });
});

module.exports = router;