var express = require('express');
var newspapersRepo = require('../repos/newspapersRepo');

var router = express.Router();


// router.get('/', (req, res) => {
//     res.render('home/index');
// });


router.get('/', (req, res) => {
    newspapersRepo.loadAll().then(rows => {
        var vm = {
            newspapers: rows
        };
        res.render('newspapers/newspapers_view', vm);
    });
});


module.exports = router;