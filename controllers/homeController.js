var express = require('express');
var basicRepo = require('../repos/basicRepo');

var router = express.Router();


router.get('/', (req, res) => {
    var users = basicRepo.count('users');
    var books = basicRepo.count('books');
    var news = basicRepo.count('newspapers');
    var magazines = basicRepo.count('magazines');
    var issued = basicRepo.count('book_issue');
    
    Promise.all([users, books, news, magazines, issued]).then(([users, books, news, magazines, issued]) => {
        var u=[], b=[], n=[], m=[], i=[];
        u.push({
            value: users[0].total,
        })
        b.push({
            value: books[0].total
        })
        n.push({
            value: news[0].total
        })
        m.push({
            value: magazines[0].total
        })
        i.push({
            value: issued[0].total
        })
        var vm = {
            users: u[0],
            books: b[0],
            news: n[0],
            magazines: m[0],
            issued: i[0]
        }
        res.render('home/index', vm);
    });
});


router.get('/about', (req, res) => {
    booksRepo.loadAll().then(rows => {
        var vm = {
            books: rows
        };
        res.render('home/about', vm);
    });
});

// router.get('/add', (req, res) => {
//     var vm = {
//         showAlert: false
//     };
//     res.render('category/add', vm);
// });

// router.post('/add', (req, res) => {
//     categoryRepo.add(req.body).then(value => {
//         var vm = {
//             showAlert: true
//         };
//         res.render('category/add', vm);
//     }).catch(err => {
//         res.end('fail');
//     });
// });

// router.get('/delete', (req, res) => {
//     var vm = {
//         CatId: req.query.id
//     }
//     res.render('category/delete', vm);
// });

// router.post('/delete', (req, res) => {
//     categoryRepo.delete(req.body.CatId).then(value => {
//         res.redirect('/category');
//     });
// });

// router.get('/edit', (req, res) => {
//     categoryRepo.single(req.query.id).then(c => {
//     	// console.log(c);
//         var vm = {
//             Category: c
//         };
//         res.render('category/edit', vm);
//     });
// });

// router.post('/edit', (req, res) => {
//     categoryRepo.update(req.body).then(value => {
//         res.redirect('/category');
//     });
// });


module.exports = router;