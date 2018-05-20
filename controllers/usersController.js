var express = require('express');
var userRepo = require('../repos/usersRepo');
var config = require('../config/config');
var router = express.Router();

router.get('/', (req, res) => {
    var page = req.query.page;

    if (!page) {
        page = 1;
    }
    var offset = (page - 1) * config.USER_PER_PAGE;
    var user1 = userRepo.loadAllOffset(offset);
    var user2 = userRepo.countUsers();
    Promise.all([user1, user2]).then(([rows, countRows]) => {
        var total = countRows[0].total;
        var nPage = total / config.USER_PER_PAGE;
        if(total % config.USER_PER_PAGE > 0)
            nPage++;

        var numberPage = [];
        for(i = 1; i <= nPage; i++){
            numberPage.push({
                value: i,
                isCurent: i === + page
            })
        }
        var vm = {
            users: rows,
            pageNumber: numberPage
        }
        res.render('user/users_view', vm);
    });
});
router.get('/viewall', (req, res) => {

    userRepo.loadAll().then(rows => {
        var vm = {
            users: rows
        };
        res.render('user/users_view_all', vm);
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