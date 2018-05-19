var express = require('express');
var userRepo = require('../repos/usersRepo');

var router = express.Router();

router.get('/', (req, res) => {

    userRepo.loadAll().then(rows => {
        var vm = {
            users: rows
        };
        console.log(vm);
        res.render('user/users_view', vm);
    });
});

module.exports = router;