var express = require('express');
var newspapersRepo = require('../repos/newspapersRepo');

var router = express.Router();


router.get('/add', (req, res) => {
    res.render('newspaper/newspapers_add');
});


router.get('/', (req, res) => {
    newspapersRepo.loadAll().then(rows => {
        var vm = {
            newspapers: rows
        };
        res.render('newspaper/newspapers_view', vm);
    });
});

router.post('/add', (req, res) => {
    newspapersRepo.add(req.body).then(value => {
        // var vm = {
        //     showAlert: true
        // };
        res.render('newspaper/newspapers_add');
    }).catch(err => {
        res.end('fail');
    });
});

module.exports = router;