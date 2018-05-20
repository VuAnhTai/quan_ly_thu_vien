var express = require('express');
var magazinesRepo = require('../repos/magazinesRepo');

var router = express.Router();


// router.get('/', (req, res) => {
//     res.render('home/index');
// });


router.get('/', (req, res) => {
    magazinesRepo.loadAll().then(rows => {
        var vm = {
            magazines: rows
        };
        console.log(vm);
        res.render('magazines/magazines_view', vm);
    });
});

router.get('/add', (req, res) => {
    var vm = {
        showAlert: false
    };
    res.render('magazines/magazines_add', vm);
});

router.post('/add', (req, res) => {
    magazinesRepo.add(req.body).then(value => {
        var vm = {
            showAlert: true
        };
        res.render('magazines/magazines_add', vm);
    }).catch(err => {
        res.end('fail');
    });
});

module.exports = router;