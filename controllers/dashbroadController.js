var express = require('express');
var booksRepo = require('../repos/booksRepo');
var issuedRepo = require('../repos/issuedRepo');
var magazinesRepo = require('../repos/magazinesRepo');
var newspapersRepo = require('../repos/newspapersRepo');
var usersRepo = require('../repos/usersRepo');

var router = express.Router();

router.get('/', (req, res) => {
    var users = userRepo.countUsers();
    var books = booksRepo.countBook();
    var news = newspapersRepo.countNews();
    var magazines = magazinesRepo.countMagazines();
    var issued = issuedRepo.countIssued();
    
    Promise.all([users, books, news, magazines, issued]).then(([users, books, news, magazines, issued]) => {
        var vm = {
            users: users,
            books: books,
            news: news,
            magazine: magazines,
            issued: issued
            
        }
        console.log(vm);
        res.render('home/index', vm);
    });
})

module.exports = router;
