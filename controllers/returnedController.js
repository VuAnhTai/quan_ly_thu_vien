var express = require('express');
var returnedRepo = require('../repos/returnedRepo');
var config = require('../config/config');
var yyyymmdd = require('yyyy-mm-dd');


var router = express.Router();



router.get('/', (req, res) => {
    returnedRepo.loadAll().then(rows => {
        for (var i = 0 ; i<rows.length ; i++){
            rows[i].Issue_Date = yyyymmdd(rows[i].Issue_Date);
            rows[i].Return_Date = yyyymmdd(rows[i].Return_Date);
        }
        var vm = {
            return_book: rows
        };
        res.render('returned/returned_view', vm);       
    });
});

router.get('/add', (req, res) => {
    res.render('returned/returned_add');
});

router.post('/add', (req, res) => {
    console.log(req.body);
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
         rows[0].Issue_Date = yyyymmdd(rows[0].Issue_Date);
         rows[0].Return_Date = yyyymmdd(rows[0].Return_Date);
        var vm = {
            return_book: rows[0]
        };
        console.log(vm);
        res.render('returned/returned_detail', vm);        
    });
});

router.post('/edit', (req, res) => {
    returnedRepo.update(req.body).then(value => {
        res.redirect('/returned');
    });
});

router.get('/print', (req, res) => {
    returnedRepo.loadAll().then(rows => {
        // for(var i = 0; i<rows.length; i++){
        //     rows[i].Purchase_Date = yyyymmdd(rows[i].Purchase_Date);  
        // }
        var vm = {
            return_book: rows
        };
        res.render('returned/returned_print', vm);
    });
});

router.post('/delete', (req, res) => {
    console.log(req.body.id);
    returnedRepo.delete(req.body.id).then(value => {
        res.redirect('/returned');
    });
});
module.exports = router;