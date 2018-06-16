var express = require('express');
var returnedRepo = require('../repos/returnedRepo');

var router = express.Router();

router.get('/add', (req, res) => {
    res.render('returned/returned_add');
});


router.get('/', (req, res) => {
    //console.log("hello");
    returnedRepo.loadAll().then(rows => {
        var vm = {
            return_book: rows
        };
        // res.render('returned/returned_view', vm);       
        // console.log(vm);
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

router.get('/edit', (req, res) => {
    returnedRepo.single(req.query.id).then(rows => {
        var vm = {
            return_book: rows[0]
        };
        console.log(vm);
        res.render('returned/returned_detail', vm);        
    });
});

module.exports = router;