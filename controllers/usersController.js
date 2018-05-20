var express = require('express');
var userRepo = require('../repos/usersRepo');

var router = express.Router();

router.get('/', (req, res) => {

    userRepo.loadAll().then(rows => {
        var vm = {
            users: rows
        };
        res.render('user/users_view', vm);
    });
});
router.get('/add', (req, res) => {
        res.render('user/users_add');
});
router.post('/add', (req, res) => {
    console.log(req.body);
    
    userRepo.add(req.body).then(value => {
        res.redirect('/user');
    })
});

router.get('/edit', (req, res) => {
    userRepo.single(req.query.id).then(rows => {
        var vm = {
            user: rows[0]
        };
        console.log(vm);
        res.render('user/users_detail', vm);        
    });
});

router.post('/edit', (req, res) => {
    console.log(req.body);
    userRepo.update(req.body).then(value => {
        res.redirect('/user');
    });
});
module.exports = router;