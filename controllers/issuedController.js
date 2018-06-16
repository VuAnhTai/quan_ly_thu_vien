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

router.get('/user', (req, res) => {
    console.log("hello");
    var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
})

// router.get('/add', (req, res) => {
//     res.render('issued/iss');
// })

module.exports = router;