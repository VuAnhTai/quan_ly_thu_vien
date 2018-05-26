var express = require('express'),
    MD5 = require('crypto-js/md5');

var accountRepo = require('../repos/accountRepo');
var router = express.Router();

router.get('/login', (req, res) => {
    res.render('account/login', {layout: false});
})



router.post('/login', (req,res) => {
    var user = {
        username: req.body.username,
        password: MD5(req.body.password).toString()
    }
    accountRepo.login(user).then(rows => {
        if (rows.length > 0) {
            req.session.isLogged = true;
            req.session.username = rows[0].memberID;            
            res.redirect('/');
        } else {
            console.log(req.session.isLogged);
            
            var vm = {
                showError: true,
                errorMsg: 'Login failed'
            };
            res.render('account/login', {
                data: vm,
                layout: false
            });
        }
    });
    
})

router.get('/logout', (req, res) => {
    req.session.isLogged = false;
    res.render('account/login', {layout: false});

})
module.exports = router;
