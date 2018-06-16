var express = require('express');
var issuedRepo = require('../repos/issuedRepo');
var basicRepo = require('../repos/basicRepo');

var router = express.Router();




router.get('/', (req, res) => {
    issuedRepo.loadAll().then(rows => {
        var vm = {
            issued: rows
        };
        res.render('issued/issued_view', vm);
    });
});

router.get('/add', (req, res) => {
    var users = basicRepo.loadAll('users');
    var books = basicRepo.loadAll('books');

    Promise.all([users, books]).then(([usersRow, booksRow]) => {
        usersRow.forEach(user => {
            x = {
                id: user.id,
                name: user.name,
                
            }
        });
        var vm = {
            users: usersRow,
            books: booksRow
        }
        res.render('issued/issued_add', vm);
    });
});

router.post('/add', (req, res)=>{
    console.log(req.body);
});

router.get('/test', (req, res) => {
    res.render('issued/test_ajax');
})

router.post('/user', (req, res) => {
    basicRepo.searchById('users', req.body.id).then(rows => {
        var number = rows[0].Membership_Number;       
        res.send(number);
    })
})

router.post('/book', (req, res) => {
    basicRepo.searchById('books', req.body.id).then(rows => {
        var ISBN_NO = rows[0].ISBN_NO;
        res.send(ISBN_NO);
    })
})

// router.get('/add', (req, res) => {
//     res.render('issued/iss');
// })

module.exports = router;