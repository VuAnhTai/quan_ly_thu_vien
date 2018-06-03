// var categoryRepo = require('../repos/categoryRepo');

module.exports = (req, res, next) => {

    if (req.session.isLogged === undefined) {
        req.session.isLogged = false;
    }
    if (req.session.isLogged === undefined) {
        req.session.username = "";        
    }
    res.locals.layoutVM = {
        isLogged: req.session.isLogged,
        username: req.session.username
    };
    next();
};