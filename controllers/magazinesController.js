<<<<<<< HEAD
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

=======
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
    console.log(req.body);
    magazinesRepo.add(req.body).then(value => {
        // var vm = {
        //     showAlert: true
        // };
        res.render('magazines/magazines_add');
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
>>>>>>> 37ca41d77f89732d1ee580235941ba4525161f9a
module.exports = router;