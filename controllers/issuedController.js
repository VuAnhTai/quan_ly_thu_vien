var express = require('express');
var issuedRepo = require('../repos/issuedRepo');

var router = express.Router();




router.get('/', (req, res) => {
    issuedRepo.loadAll().then(rows => {
        var vm = {
            issued: rows
        };
        res.render('issued/issued_view', vm);
    });
});


module.exports = router;