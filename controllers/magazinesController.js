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
        res.render('magazines/magazines_view', vm);
    });
});

router.get('/add', (req, res) => {
    res.render('magazines/magazines_add');
});

router.post('/add', (req, res) => {
    magazinesRepo.add(req.body).then(value => {
        // var vm = {
        //     showAlert: true
        // };
        res.render('magazines/magazines_add', vm);
    }).catch(err => {
        res.end('fail');
    });
});


router.get('/detail', (req, res) => {
    res.render('magazines/magazines_detail');
});

router.post('/detail', (req, res) => {
    magazinesRepo.add(req.body).then(value => {
        // var vm = {
        //     showAlert: true
        // };
        res.render('magazines/magazines_detail', vm);
    }).catch(err => {
        res.end('fail');
    });
});
module.exports = router;